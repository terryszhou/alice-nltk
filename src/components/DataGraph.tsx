import { Code, Stack, useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, TooltipProps, ResponsiveContainer } from 'recharts';
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

import { figureDataProps} from "../data/figureData";

export const DataGraph = ({ fig, title, fillColor, valueLabel, data, code }: figureDataProps) => {
  return (
    <ResponsiveContainer height={300} width={"100%"}>
      <BarChart data={data}>
        <text
          dominantBaseline="central"
          fill={colorMode("black", "white")}
          textAnchor="middle"
          x={165}
          y={5}>
          <tspan fontFamily={"Nunito"} fontSize="14">{title}</tspan>
        </text>
        <XAxis dataKey={"label"} />
        <YAxis />
        <Tooltip content={<CustomTooltip valueLabel={valueLabel} />} cursor={false} />
        <Bar dataKey="value" fill={fillColor} radius={[5, 5, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

interface TooltipLabels {
  valueLabel: string,
};

export const CustomTooltip = ({
  active,
  payload,
  label,
  valueLabel
}: TooltipProps<ValueType, NameType> & TooltipLabels) => {
  if (active && payload && payload.length) {
    return (  
      <Stack fontFamily={"var(--chakra-fonts-mono)"}>
        <Code children={`Chapter ${label}`} />
        <Code children={`${payload[0].value} ${valueLabel}`} />
      </Stack>
    );
  };
  return null;
};
