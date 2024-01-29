import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import colors from "tailwindcss/colors";
import { dailyRevenueInPeriodLineChartProps } from "./chart.types";

export const DailyRevenueInPeriodLineChart = ({
	data,
}: dailyRevenueInPeriodLineChartProps) => (
	<ResponsiveContainer width="100%" height={240}>
		<LineChart data={data} style={{ fontSize: 12 }}>
			<XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
			<YAxis
				stroke="#888"
				axisLine={false}
				tickLine={false}
				width={80}
				tickFormatter={(value: number) =>
					value.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})
				}
			/>
			<CartesianGrid vertical={false} className="stroke-muted" />
			<Line
				type="linear"
				strokeWidth={2}
				dataKey="receipt"
				stroke={colors.violet[500]}
			/>
		</LineChart>
	</ResponsiveContainer>
);
