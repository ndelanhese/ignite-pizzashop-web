"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { BarChart } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import colors from "tailwindcss/colors";

const fakeData = [
	{ product: "Peperoni", amount: 40 },
	{ product: "Calabresa", amount: 30 },
	{ product: "4 Queijos", amount: 50 },
	{ product: "Moda da casa", amount: 16 },
	{ product: "Sonho de valsa", amount: 26 },
];

const COLORS = [
	colors.sky[500],
	colors.amber[500],
	colors.violet[500],
	colors.emerald[500],
	colors.rose[500],
];

export const PopularProductsChart = () => (
	<Card className="col-span-3">
		<CardHeader className=" pb-8">
			<div className="flex items-center justify-between">
				<CardTitle className="text-base font-medium">
					Produtos populares
				</CardTitle>
				<BarChart className="h-4 w-4 text-muted-foreground" />
			</div>
		</CardHeader>
		<CardContent>
			<ResponsiveContainer width="100%" height={240}>
				<PieChart style={{ fontSize: 12 }}>
					<Pie
						data={fakeData}
						dataKey="amount"
						nameKey="product"
						cx="50%"
						cy="50%"
						outerRadius={86}
						innerRadius={64}
						strokeWidth={8}
						labelLine={false}
						label={({
							cx,
							cy,
							midAngle,
							innerRadius,
							outerRadius,
							value,
							index,
						}) => {
							const RADIAN = Math.PI / 180;
							const radius = 12 + innerRadius + (outerRadius - innerRadius);
							const x = cx + radius * Math.cos(-midAngle * RADIAN);
							const y = cy + radius * Math.sin(-midAngle * RADIAN);

							return (
								<text
									x={x}
									y={y}
									className="fill-muted-foreground text-xs"
									textAnchor={x > cx ? "start" : "end"}
									dominantBaseline="central"
								>
									{fakeData[index].product.length > 12
										? fakeData[index].product.substring(0, 12).concat("...")
										: fakeData[index].product}{" "}
									({value})
								</text>
							);
						}}
					>
						{fakeData.map((_, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index]}
								className="stroke-background hover:opacity-80"
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</CardContent>
	</Card>
);
