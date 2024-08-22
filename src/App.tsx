import React, { useState } from "react";
import "./App.css";
import Joyride, {
  CallBackProps,
  STATUS,
  Step,
  Styles,
  TooltipProps,
} from "react-joyride";
import ReactJoyride from "react-joyride";
import CustomTooltip from "./CustomTooltip";

const steps: Step[] = [
  {
    target: ".step1",
    content: "これが最初のステップです！",
    disableBeacon: true,
    hideFooter: true, // Next, Back, Skipなどを出さない、枠外をクリックで進む
    offset: 0, // 対象からのpopupの距離
    title: "ほげ",
    isFixed: true,
  },
  {
    target: ".step2",
    content: "これが2番目のステップです！",
    disableBeacon: true,
  },
  {
    target: ".step3",
    content: "これが3番目のステップです！",
    disableBeacon: true,
  },
];

const customStyles = {
  options: {
    arrowColor: "#1A202C", // popupのArrow色
    backgroundColor: "#1A202C", // popupの背景色
    overlayColor: "#333", // 表示領域以外をカバーする色
    textColor: "#E2E8F0",
    primaryColor: "#fff", // ?
    beaconSize: 36, // 最初に出てくるビーコンのサイズ
    spotlightShadow: "20px 0 30px rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    width: 300,
  },
  beaconInner: {
    // display: "none",
  },
  tooltipContainer: {
    padding: "16px", // p-4相当
    // width: "200px",
    // height: "auto",
  },
  buttonNext: {
    backgroundColor: "#3182CE",
    color: "#E2E8F0",
    padding: "8px 16px",
    borderRadius: "8px",
  },
  buttonBack: {
    color: "#A0AEC0", // グレー（Tailwindのgray-400相当）
    padding: "8px 16px", // py-2 px-4相当
  },
  buttonSkip: {
    color: "#E53E3E", // 赤（Tailwindのred-500相当）
    padding: "8px 16px", // py-2 px-4相当
  },
};

const Showcase: React.FC = () => {
  const [run, setRun] = useState(false);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      setRun(false);
    }
  };

  return (
    <div>
      <button onClick={() => setRun(true)}>Showcaseを開始</button>
      {/* <Joyride
        steps={steps}
        run={run}
        callback={handleJoyrideCallback}
        continuous
        showProgress
        showSkipButton
        styles={customStyles}
      /> */}
      <ReactJoyride
        tooltipComponent={CustomTooltip}
        steps={steps}
        run={run}
        callback={handleJoyrideCallback}
        continuous
        showProgress
        showSkipButton
        // styles={customStyles}
      />
      <div className="step1 p-4 bg-gray-200">ステップ1: 機能紹介</div>
      <div className="step2 p-4 bg-blue-200">ステップ2: 主要機能</div>
      <div className="step3 p-4 bg-green-200">ステップ3: 最後の感想</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>私のアプリへようこそ！</h1>
      <Showcase />
    </div>
  );
}

export default App;
