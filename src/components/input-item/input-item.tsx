import Input, { type Props as InputProps } from '@/components/input/input';

type Props = InputProps & {
  label: string;
};

export default function InputItem(props: Props) {
  return (
    <div className="input-item">
      <h3 className="input-item__label">{props.label}</h3>

      <Input
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        type={props.type}
      />
    </div>
  );
}
