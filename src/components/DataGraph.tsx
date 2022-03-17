import { Code, Stack, useColorModeValue as colorMode, useDisclosure } from "@chakra-ui/react";
import * as React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, TooltipProps, ResponsiveContainer } from 'recharts';
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

import { figureDataProps} from "../data/figureData";
import { DataGraphModal } from "./DataGraphModal";

export const DataGraph = ({ fig, title, fillColor, valueLabel, data, code }: figureDataProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <ResponsiveContainer height={300} width={"100%"}>
        <BarChart data={data} onClick={onOpen} style={{ cursor: "pointer" }}>
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
      <DataGraphModal
        code={code}
        fig={fig}
        isOpen={isOpen}
        onClose={onClose}
        title={title} />
    </React.Fragment>
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
