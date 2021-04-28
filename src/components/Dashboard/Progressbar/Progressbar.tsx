import React, { ReactElement } from 'react';
import { ProgressContainer, Title, ProgressbarSvg, WeekContainer, Week } from './style';

interface IProgressProps {
    maxWeek: number;
    currentState: number;
}

const xOffset = 10;
const xSpace = 20;
const yCenter = 5;

export function Progressbar(props: IProgressProps): ReactElement {
    const progressSvg: React.ReactNode[] = [];

    const width = xSpace * props.maxWeek - xOffset;

    for (let i = 0, key = 0; i < props.maxWeek; i++) {
        if (i !== 0) {
            progressSvg.push(
                <line
                    key={key++}
                    stroke={i < props.currentState - 1 ? '#b2c200' : '#dbdbdb'}
                    x1={-xOffset + i * xSpace}
                    x2={xOffset + i * xSpace}
                    y1="5"
                    y2="5"
                    strokeWidth="2px"
                />,
            );
        }
        progressSvg.push(
            <circle
                key={key++}
                cx={yCenter + i * xSpace}
                cy="5"
                r="5"
                fill={i < props.currentState - 1 ? '#b2c200' : '#dbdbdb'}
            />,
        );
        if (i === props.currentState - 1) {
            progressSvg.push(
                <circle
                    key={key++}
                    cx={yCenter + i * xSpace}
                    cy="5"
                    r="3"
                    fill="white"
                />,
            );
        }
    }

    return (
        <ProgressContainer width={width}>
            <Title>Your {props.maxWeek} week progress</Title>
            <ProgressbarSvg height="10px">
                {progressSvg}
            </ProgressbarSvg>
            <WeekContainer>
                {new Array(props.maxWeek).fill(0).map((_, value) => <Week key={value}>{value + 1}</Week>)}
            </WeekContainer>
        </ProgressContainer>
    );
}
