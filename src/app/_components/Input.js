'use client';

export default function Input(props) {
  const { id, label, type, onChange, value, name } = props;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="font-light text-lg text-white pl-8"
    >
      {label}
    </label>
    <div className="bg-black border-purple-900 border-2 flex flex-row-reverse relative rounded-full w-full
    before:content-[''] before:absolute before:inset-0 before:bg-purple-500/50 before:blur-xl before:rounded-full before:-z-10 before:transition-opacity before:duration-500
    after:content-[''] after:absolute after:inset-0 after:bg-purple-500/30 after:blur-xl after:rounded-full after:scale-105 after:-z-10 after:opacity-0
    focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-0 focus-within:shadow-[0_0_15px_rgba(168,85,247,0.5),0_0_30px_rgba(168,85,247,0.3)] focus-within:before:opacity-80 focus-within:after:opacity-60 focus-within:after:animate-pulse transition-all duration-300">
      <input 
        type={type} 
        id={id}
        name={name || id}
        value={value || ''}
        onChange={handleChange} 
        className="peer bg-transparent h-16 px-8 rounded-r-full text-lg text-white w-full focus:outline-none"
      />
    </div>
    </div>
  );
}
  
  