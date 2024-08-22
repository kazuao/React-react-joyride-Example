import { TooltipRenderProps } from "react-joyride";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CustomTooltip: React.FC<TooltipRenderProps> = ({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  isLastStep,
}) => {
  return (
    <div
      {...tooltipProps}
      className="max-w-xs p-4 bg-gray-900 text-white rounded-lg shadow-lg"
    >
      {step.title && <div className="mb-4 text-lg font-bold">{step.title}</div>}
      <div className="mb-4">{step.content}</div>
      <div className="flex justify-between">
        {index > 0 && (
          <button
            {...backProps}
            className="text-gray-400 hover:text-gray-200 flex items-center"
          >
            <IoIosArrowBack className="mr-2" />
            戻る
          </button>
        )}
        <div className="ml-auto">
          {continuous && !isLastStep ? (
            <button
              {...primaryProps}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              進む
              <IoIosArrowForward className="ml-2" />
            </button>
          ) : (
            <button
              {...closeProps}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              閉じる
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomTooltip;
