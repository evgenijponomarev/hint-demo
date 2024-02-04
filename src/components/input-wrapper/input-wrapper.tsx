type Props = {
  children: React.ReactNode;
};

export default function InputWrapper(props: Props) {
  return (
    <div className="input-wrapper">
      {props.children}
    </div>
  );
}
