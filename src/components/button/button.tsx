type Props = {
  children: React.ReactNode;
  type: 'button' | 'submit';
};

export default function Button(props: Props) {
  return (
    <button className="button" type={props.type}>{props.children}</button>
  );
}
