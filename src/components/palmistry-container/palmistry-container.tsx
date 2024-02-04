type Props = {
  children: React.ReactNode;
};

export default function PalmistryContainer(props: Props) {
  return (
    <div className="palmistry-container">
      {props.children}
    </div>
  );
}
