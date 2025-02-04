'use client';
import React from 'react';

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { year: 1971, transistors: 2308.2417 },
  { year: 1972, transistors: 3554.5222 },
  { year: 1974, transistors: 6097.5625 },
  { year: 1979, transistors: 29163.777 },
  { year: 1982, transistors: 135772.72 },
  { year: 1985, transistors: 273841.94 },
  { year: 1986, transistors: 273841.94 },
  { year: 1988, transistors: 273841.94 },
  { year: 1989, transistors: 1207900.8 },
  { year: 1990, transistors: 1207900.8 },
  { year: 1992, transistors: 3105900.2 },
  { year: 1993, transistors: 3105900.2 },
  { year: 1994, transistors: 3105900.2 },
  { year: 1995, transistors: 9646616 },
  { year: 1996, transistors: 9646616 },
  { year: 1997, transistors: 9646616 },
  { year: 1998, transistors: 15261378 },
  { year: 1999, transistors: 21673922 },
  { year: 2000, transistors: 37180264 },
  { year: 2001, transistors: 42550656 },
  { year: 2002, transistors: 220673400 },
  { year: 2003, transistors: 220673400 },
  { year: 2004, transistors: 273842000 },
  { year: 2005, transistors: 305052770 },
  { year: 2006, transistors: 582941600 },
  { year: 2007, transistors: 805842200 },
  { year: 2008, transistors: 805842200 },
  { year: 2009, transistors: 2308241400 },
  { year: 2010, transistors: 2308241400 },
  { year: 2011, transistors: 2600000000 },
  { year: 2012, transistors: 2600000000 },
  { year: 2013, transistors: 5000000000 },
  { year: 2014, transistors: 5700000000 },
  { year: 2016, transistors: 8000000000 },
  { year: 2017, transistors: 19200000000 },
  { year: 2018, transistors: 21100000000 },
  { year: 2019, transistors: 39500000000 },
  { year: 2020, transistors: 39500000000 },
  { year: 2021, transistors: 58200000000 },
];

const MooresLaw = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="scale-105">
      <LineChart data={data} margin={{ top: 1, right: 1, left: 1, bottom: 1 }}>
        <XAxis
          hide
          dataKey="year"
          scale="time"
          tickFormatter={(tick) => tick}
        />
        <YAxis hide scale="log" domain={['auto', 'auto']} />
        <Line
          dataKey="transistors"
          stroke="rgba(2, 6, 6, 0.2196)"
          animationDuration={0}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MooresLaw;
