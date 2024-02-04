type Props = {
  children: React.ReactNode;
};

export default function Wrapper(props: Props) {
  return (
    <div className="wrapper">
      {props.children}
    </div>
  );
}
