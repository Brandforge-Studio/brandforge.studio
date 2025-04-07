'use client';

export default function Button(props) {
  const { children, disabled, form} = props;

  return (
    <button
      className="
        bg-purple-600/80 border-2 border-transparent backdrop-blur-sm flex flex-row gap-2 font-sans font-light items-center justify-center py-2 px-8 text-2xl rounded-full w-fit transition-colors duration-300 ease-in-out hover:bg-purple-500/80"
      disabled={disabled}
      form={form}
      type="button"
    >
      {children}
    </button>
  );
}
  