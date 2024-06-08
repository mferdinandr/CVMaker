interface LabelProps {
  label: string;
  id: string;
}

export const Label: React.FC<LabelProps> = ({ label, id }) => {
  return (
    <label htmlFor={id} className="mb-1 ml-1 font-bold">
      {label}
    </label>
  );
};
