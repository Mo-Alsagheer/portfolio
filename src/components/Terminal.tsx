import { useState, useEffect, useRef, type FormEvent } from 'react';
import { CLI_COMMANDS } from '../utils/cliData';

interface TerminalProps {
  onExit: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode | string;
  isPending?: boolean;
}

const Spinner = () => {
  const [frame, setFrame] = useState(0);
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

  useEffect(() => {
    const timer = setInterval(() => setFrame((f) => (f + 1) % frames.length), 100);
    return () => clearInterval(timer);
  }, []);

  return <span className="text-blue-400 mr-2">{frames[frame]}</span>;
};

export default function Terminal({ onExit }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 'init',
      command: '',
      output: `Welcome to Mohamed Alsagheer's Terminal v1.0.0
Type 'help' to see a list of available commands.
Type 'quit' to return to the interactive portfolio.`
    }
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom and focus input
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [history]);

  useEffect(() => {
    // Keep focus on the terminal input when clicking anywhere
    const handleGlobalClick = () => inputRef.current?.focus();
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleCommand = async (e: FormEvent) => {
    e.preventDefault();
    const typedInput = input.trim();
    if (!typedInput) return;

    const inputParts = typedInput.toLowerCase().split(/\s+/);
    const commandId = Date.now().toString();

    // Determine if user invoked sudo
    const isSudo = inputParts[0] === 'sudo';
    let rawCmd = isSudo ? inputParts[1] : inputParts[0];

    // If sudo was called with no trailing command
    if (isSudo && !rawCmd) {
      setHistory((prev) => [
        ...prev, 
        { id: commandId, command: typedInput, output: "sudo: no command given. Try 'sudo help'." }
      ]);
      setInput('');
      return;
    }

    // Command Aliases Mapping
    const aliases: Record<string, string> = {
      'h': 'help',
      'a': 'about',
      's': 'skills',
      'p': 'projects',
      'e': 'experience',
      'c': 'contact',
      'cv': 'download-cv',
      'cls': 'clear',
      'q': 'quit'
    };

    const cmd = aliases[rawCmd || ''] || rawCmd;

    // Permissions Validation
    const isPublicCommand = cmd === 'help' || cmd === 'quit' || cmd === 'clear';
    
    if (!isPublicCommand && !isSudo) {
      setHistory((prev) => [
        ...prev, 
        { id: commandId, command: typedInput, output: "Permission denied. Are you root? (Hint: prepend 'sudo')" }
      ]);
      setInput('');
      return;
    }

    // Command Executions
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd === 'quit') {
      onExit();
      return;
    }

    // Custom Handle for Asynchronous 'download-cv' command
    if (cmd === 'download-cv') {
      setHistory((prev) => [...prev, { id: commandId, command: typedInput, output: '', isPending: true }]);
      setInput('');

      // Simulate download spinner delay (3.0s)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Trigger actual HTML download
      const link = document.createElement('a');
      link.href = '/Mohamed_Mostafa_CV.pdf';
      link.download = 'Mohamed_Mostafa_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Finalize the terminal output saying it's done
      setHistory((prev) =>
        prev.map((entry) =>
          entry.id === commandId
            ? { ...entry, isPending: false, output: 'File [Mohamed_Mostafa_CV.pdf] successfully downloaded.' }
            : entry
        )
      );
      return;
    }

    // Default Command Router
    let output = '';
    if (Object.keys(CLI_COMMANDS).includes(cmd)) {
      output = CLI_COMMANDS[cmd as keyof typeof CLI_COMMANDS];
    } else if (cmd === 'sudo') {
      output = 'Nice try. You lack the necessary privileges.';
    } else {
      output = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
    }

    setHistory((prev) => [...prev, { id: commandId, command: cmd, output }]);
    setInput('');
  };

  return (
    <div className="crt relative min-h-screen bg-black font-mono text-white p-6 selection:bg-white selection:text-black">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-5 text-base sm:text-lg leading-loose">
        
        {/* Terminal History */}
        {history.map((entry, index) => (
          <div key={index} className="flex flex-col gap-2">
            {entry.command && (
              <div className="flex items-center gap-2">
                <span className="text-blue-400">guest@mohamed:~$</span>
                <span>{entry.command}</span>
              </div>
            )}
            {entry.output && !entry.isPending && (
              <pre className="whitespace-pre-wrap font-inherit text-gray-300">
                {entry.output}
              </pre>
            )}
            {entry.isPending && (
              <div className="flex items-center text-gray-300">
                <Spinner /> Processing request for Mohamed_CV.pdf...
              </div>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <span className="text-blue-400 whitespace-nowrap">guest@mohamed:~$</span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent outline-none border-none text-gray-300 caret-transparent"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
            {/* Custom Blinking Cursor positioned over the invisible actual caret */}
            <span 
              className="absolute pointer-events-none animate-blink bg-white w-2.5 h-[1.2rem]"
              style={{
                left: `${input.length}ch`,
                transition: 'none'
              }}
            />
          </div>
        </form>
        
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
