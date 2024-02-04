type Props = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick: () => void;
};

export default function Button(props: Props) {
  const className = ['button'];

  if (props.disabled) {
    className.push('button_disabled');
  }

  return (
    <button
      className={className.join(' ')}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >{props.children}</button>
  );
}
