'use client';

export default function Input(props) {
  const { id, label, onChange, value, name, placeholder } = props;

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
      <div className="bg-black border-purple-900 border-2 flex flex-column relative rounded-[2.3rem] w-full
        before:content-[''] before:absolute before:inset-0 before:bg-purple-500/50 before:blur-xl before:rounded-[2.3rem] before:-z-10 before:transition-opacity before:duration-500
        after:content-[''] after:absolute after:inset-0 after:bg-purple-500/30 after:blur-xl after:rounded-[2.3rem] after:scale-105 after:-z-10 after:opacity-0
        focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-0 focus-within:shadow-[0_0_15px_rgba(168,85,247,0.5),0_0_30px_rgba(168,85,247,0.3)] focus-within:before:opacity-80 focus-within:after:opacity-60 focus-within:after:animate-pulse transition-all duration-300">
        <textarea
          className="peer bg-transparent font-light h-72 px-8 py-6 resize-none rounded-[2.3rem] text-lg text-white w-full focus:outline-none"
          cols={6}
          id={id}
          name={name || id}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          value={value}
        />
      </div>
    </div>
  );
}
  
  