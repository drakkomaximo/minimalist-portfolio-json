import TextField from "@/components/TextField";
import { useProfileStore } from "@/store";

interface Props {
  readOnly?: boolean;
}

const Sumary = ({ readOnly }: Props) => {
  const basic = useProfileStore((state) => state.basic);
  const setBasic = useProfileStore((state) => state.setBasic);
  const { summary } = basic;

  const handleSummary = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setBasic(event.target.name, event.target.value);
  };

  return (
    <>
      <TextField
        name="summary"
        value={summary}
        onChange={handleSummary}
        readOnly={readOnly}
        isTextArea
      >
        <p>{summary}</p>
      </TextField>
    </>
  );
};

export default Sumary;
