import { useState, type InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  readOnly?: boolean;
  isTextArea?: boolean;
}

const TextField = ({
  children,
  readOnly = false,
  isTextArea = false,
  ...props
}: TextFieldProps) => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <div
          onClick={() => !readOnly && handleClick()}
          style={{ cursor: readOnly ? "default" : "pointer" }}
        >
          {children}
          {/* {!readOnly && <Pencil />} */}
        </div>
      ) : (
        isTextArea ? (
          <textarea
            /* {...props} */
            onFocus={(event) => {
              (event.target as HTMLTextAreaElement).style.borderColor = "black";
            }}
            rows={4}
            value={props.value}
            onBlur={handleClick}
          />
        ) : (
        <input
          {...props}
          onFocus={(event) => {
            (event.target as HTMLInputElement).style.borderColor = "black";
          }}
          value={props.value}
          onBlur={handleClick}
        />
        )
      )}

      <style>
        {`
          h1 {
            font-size: 2rem;
          }

          textarea {
            resize: none;
            width: 100%;
            border: 1px solid transparent;
            padding: 10px;
          }

          input {
            border: 1px solid transparent;
            padding: 10px;
          }

          div {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default TextField;
