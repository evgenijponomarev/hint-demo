type Props = {
  progressPercentage: number;
};

export default function ProgressBar(props: Props) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__current-step">2/9</div>

      <div className="progress-bar__container">
        <div className="progress-bar__filler" style={{ width: `${props.progressPercentage}%` }}/>
      </div>
    </div>
  );
}
