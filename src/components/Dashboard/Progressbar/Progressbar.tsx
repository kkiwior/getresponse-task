import React from "react";
import styled from "styled-components";

interface Progress {
    maxWeek: number;
    currentState: number;
}

function Progressbar({maxWeek, currentState}: Progress) {
    const progressSvg: React.SVGProps<SVGElement>[] = [];

    for (let i = 0, key = 0; i < maxWeek; i++) {
        if (i !== 0) {
            progressSvg.push(<line key={key++} stroke={i < currentState - 1 ? "#b2c200" : "#dbdbdb"} x1={-10 + i * 20}
                                   x2={10 + i * 20} y1="5" y2="5" strokeWidth="2px"/>);
        }
        progressSvg.push(<circle key={key++} cx={5 + i * 20} cy="5" r="5" fill={i < currentState - 1 ? "#b2c200" : "#dbdbdb"}/>);
        if (i === currentState - 1) {
            progressSvg.push(<circle key={key++} cx={5 + i * 20} cy="5" r="3" fill="white"/>);
        }
    }

    return (
        <ProgressContainer>
            <Title>Your {maxWeek} week progress</Title>
            <SVG width={(20 * maxWeek - 10) + "px"} height="10px">
                {progressSvg}
            </SVG>
            <WeekContainer>
                {Array.from(Array(maxWeek).keys()).map(function day(value) {
                    return <Week key={value}>{value + 1}</Week>
                })}
            </WeekContainer>
        </ProgressContainer>
    );
}

const ProgressContainer = styled.div`
  display: inline-block;
  margin-right: 62px;
`;

const Title = styled.p`
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const SVG = styled.svg`
  margin: 4px 0 0 2px;
`;

const WeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0 0 2px;
`;

const Week = styled.div`
  width: 10px;
  text-align: center;
`;

export {Progressbar}