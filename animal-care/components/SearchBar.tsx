type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search tips..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
      />
    </div>
  );
}
