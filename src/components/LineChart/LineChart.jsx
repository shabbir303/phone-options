
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
//recharts website theke import korte hobe
const LChart = () => {

    const studentData = [
        { student: "Student 1", mathMarks: 85 },
        { student: "Student 2", mathMarks: 78 },
        { student: "Student 3", mathMarks: 80 },
        { student: "Student 4", mathMarks: 90 },
        { student: "Student 5", mathMarks: 20 },
        { student: "Student 6", mathMarks: 75 },
        { student: "Student 7", mathMarks: 91 },
        { student: "Student 8", mathMarks: 79 },
        { student: "Student 9", mathMarks: 84 }
      ];
    return (
        <div className=''>
            <h1 className='text-[50px] font-bold text-[#1D9959] mt-5 border-b-[2px] border-spacing-2 border-[#841D99] '>Students Math mark Linechart</h1>
            
            <LineChart width={900} height={600} margin-top={200} data={studentData}>
            <XAxis dataKey="student"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
                {/* width {500} means 500px */}
                <Line dataKey="mathMarks" stroke='#FF0000' ></Line>
            </LineChart>
        </div>
    );
};

export default LChart;