export interface figureDataProps {
  fig: string,
  title: string,
  fillColor: string,
  valueLabel: string,
  data: {
    label: string,
    value: number
  }[],
  code: string[],
};

export const figureDataOne: figureDataProps[] = [
  {
    fig: "/images/alice_chap_sent_count_graph.png",
    title: "Sentence Count Per Chapter",
    fillColor: "#ae2e74",
    valueLabel: "sentences",
    data: [
      {
        label: "I",
        value: 62,
      },
      {
        label: "II",
        value: 79,
      },
      {
        label: "III",
        value: 64,
      },
      {
        label: "IV",
        value: 91,
      },
      {
        label: "V",
        value: 87,
      },
      {
        label: "VI",
        value: 72,
      },
      {
        label: "VII",
        value: 97,
      },
      {
        label: "VIII",
        value: 98,
      },
      {
        label: "IX",
        value: 80,
      },
      {
        label: "X",
        value: 87,
      },
      {
        label: "XI",
        value: 78,
      },
      {
        label: "XII",
        value: 72,
      },
    ],
    code: [
      "fig, ax = plt.subplots(figsize=(15,7))",
      "ax.bar(x=df.groupby('chapter').nunique()['sentences'].index, height=df.groupby('chapter').nunique()['sentences'].values, color=`#a53363`)",
      "ax.set_xticklabels(df['chapter'].unique(), rotation=30)",
      "ax.set_title('Sentence count per chapter - Alice in Wonderland', fontsize=16)",
      "ax.spines['top'].set_visible(False)",
      "ax.spines['right'].set_visible(False)",
      "ax.spines['bottom'].set_alpha(0.2)",
      "ax.spines['left'].set_alpha(0.2)",
      "ax.yaxis.grid(alpha=0.2)",
    ],
  },
  {
    fig: "/images/alice_avg_sent_length_graph.png",
    title: "Average Sentence Length",
    fillColor: "#b47490",
    valueLabel: "words",
    data: [
      {
        label: "I",
        value: 43,
      },
      {
        label: "II",
        value: 45,
      },
      {
        label: "III",
        value: 37,
      },
      {
        label: "IV",
        value: 53,
      },
      {
        label: "V",
        value: 43,
      },
      {
        label: "VI",
        value: 39,
      },
      {
        label: "VII",
        value: 47,
      },
      {
        label: "VIII",
        value: 44,
      },
      {
        label: "IX",
        value: 49,
      },
      {
        label: "X",
        value: 42,
      },
      {
        label: "XI",
        value: 40,
      },
      {
        label: "XII",
        value: 43,
      },
    ],
    code: [
      "df['sentences_length'] = df['sentences'].apply(lambda x: len(x.split(' ')))",
      "fig, ax = plt.subplots(figsize=(15,7))",
      "ax.bar(x=df.groupby('chapter').nunique()['sentences_length'].index, height=df.groupby('chapter').nunique()['sentences_length'].values, alpha=0.7, color='#a53363')",
      "ax.set_xticklabels(df['chapter'].unique(), rotation=30)",
      "ax.set_title('Avg. sentence length - Alice in Wonderland', fontsize=16)",
      "ax.spines['top'].set_visible(False)",
      "ax.spines['right'].set_visible(False)",
      "ax.spines['bottom'].set_alpha(0.2)",
      "ax.spines['left'].set_alpha(0.2)",
      "ax.yaxis.grid(alpha=0.2)",
      "ax.set_ylabel('Word Count')",
    ],
  },
];

export const figureDataTwo: figureDataProps[] = [
  {
    fig: "/images/alice_compound_graph.png",
    title: "Mean Compound Sentiment Scores",
    fillColor: "#9c85a4",
    valueLabel: "compound score",
    data: [
      {
        label: "I",
        value: 0.10598065
      },
      {
        label: "II",
        value: 0.04139747
      },
      {
        label: "III",
        value: 0.07933281
      },
      {
        label: "IV",
        value: 0.0852033
      },
      {
        label: "V",
        value: -0.05067778
      },
      {
        label: "VI",
        value: 0.07265408
      },
      {
        label: "VII",
        value: 0.02670408
      },
      {
        label: "VIII",
        value: 0.05882875
      },
      {
        label: "IX",
        value: -0.08812759
      },
      {
        label: "X",
        value: 0.00022717
      },
      {
        label: "XI",
        value: 0.05556282
      },
      {
        label: "XII",
        value: 0.02204722
      },
    ],
    code: [
      "fig, ax = plt.subplots(figsize=(15,7))",
      "ax.plot(df.groupby('chapter', sort=False).mean()['compound_score'].index, df.groupby('chapter', sort=False).mean()['compound_score'].values, linewidth=3, color='#a53363')",
      "ax.set_xticklabels(df.groupby('chapter', sort=False).mean()['compound_score'].index, rotation=30)",
      "ax.set_ylim(-0.15, 0.15)",
      "ax.axhline(y=0, linestyle=':', color='grey')",
      "ax.set_title('Mean compound sentiment score of each chapter - Alice in Wonderland', fontsize=16)",
      "ax.spines['top'].set_visible(False)",
      "ax.spines['right'].set_visible(False)",
      "ax.spines['bottom'].set_alpha(0.2)",
      "ax.spines['left'].set_alpha(0.2)",
      "ax.fill_between(x=ax.get_xticks(), y1=-0.05, y2=0.05, color='grey', alpha=0.1)",
      "ax.text(x=0, y=0.025, s='neutral')",
      "ax.xaxis.grid(alpha=0.2)",
      "ax.yaxis.grid(alpha=0.2)",
      "plt.show()",
    ],
  },
];

export const figureDataThree = [
  {
    fig: "/images/alice_top_characters.png",
    title: "Total Character Occurrences by Chapter",
    data: [
      {
        name: "Dodo",
        I: 0,
        II: 0,
        III: 9,
        IV: 0,
        V: 0,
        VI: 0,
        VII: 0,
        VIII: 0,
        IX: 0,
        X: 0,
        XI: 0,
        XII: 0,
      },
      {
        name: "Hare",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 0,
        VI: 1,
        VII: 9,
        VIII: 0,
        IX: 0,
        X: 0,
        XI: 1,
        XII: 0,
      },
      {
        name: "White Rabbit",
        I: 2,
        II: 1,
        III: 0,
        IV: 1,
        V: 0,
        VI: 0,
        VII: 0,
        VIII: 0,
        IX: 0,
        X: 1,
        XI: 5,
        XII: 9,
      },
      {
        name: "Cheshire Cat",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 0,
        VI: 14,
        VII: 0,
        VIII: 5,
        IX: 0,
        X: 0,
        XI: 0,
        XII: 0,
      },
      {
        name: "Mouse",
        I: 0,
        II: 7,
        III: 15,
        IV: 0,
        V: 0,
        VI: 0,
        VII: 0,
        VIII: 0,
        IX: 0,
        X: 0,
        XI: 0,
        XII: 1,
      },
      {
        name: "Caterpillar",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 23,
        VI: 0,
        VII: 0,
        VIII: 0,
        IX: 0,
        X: 1,
        XI: 0,
        XII: 0,
      },
      {
        name: "Dormouse",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 0,
        VI: 0,
        VII: 23,
        VIII: 0,
        IX: 0,
        X: 0,
        XI: 9,
        XII: 0,
      },
      {
        name: "Queen",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 0,
        VI: 1,
        VII: 1,
        VIII: 18,
        IX: 6,
        X: 0,
        XI: 5,
        XII: 2,
      },
      {
        name: "Duchess",
        I: 0,
        II: 1,
        III: 0,
        IV: 2,
        V: 0,
        VI: 13,
        VII: 0,
        VIII: 0,
        IX: 15,
        X: 0,
        XI: 1,
        XII: 1,
      },
      {
        name: "Hatter",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 0,
        VI: 0,
        VII: 23,
        VIII: 0,
        IX: 0,
        X: 0,
        XI: 14,
        XII: 0,
      },
      {
        name: "Mock Turtle",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 0,
        VI: 0,
        VII: 0,
        VIII: 0,
        IX: 19,
        X: 27,
        XI: 0,
        XII: 2,
      },
      {
        name: "Gryphon",
        I: 0,
        II: 0,
        III: 0,
        IV: 0,
        V: 0,
        VI: 0,
        VII: 0,
        VIII: 0,
        IX: 15,
        X: 30,
        XI: 3,
        XII: 1,
      },
      {
        name: "Alice",
        I: 12,
        II: 8,
        III: 7,
        IV: 11,
        V: 14,
        VI: 23,
        VII: 27,
        VIII: 14,
        IX: 21,
        X: 15,
        XI: 6,
        XII: 12,
      },
    ],
    code: [
      "sums_by_chapter = {}",
      "for chap in df['chapter'].unique(): df_plot = df[df['chapter'] == chap] for char in top_chars: df_plot2 = df_plot.groupby('chapter', as_index=False).sum() value = df_plot2[char].values[0] print(df_plot2[char], value) if char not in sums_by_chapter.keys(): sums_by_chapter[char] = 0 ax.barh(y=char, width=value, left=sums_by_chapter[char], color=colors[i]) sums_by_chapter[char] = value + sums_by_chapter[char] i += 1",
      "ax.spines['top'].set_visible(False)",
      "ax.spines['right'].set_visible(False)",
      "ax.spines['bottom'].set_alpha(0.2)",
      "ax.spines['left'].set_alpha(0.2)",
      "ax.xaxis.grid(alpha=0.2)",
      "ax.yaxis.grid(alpha=0.2)",
      "ax.set_title('Total character occurrences by chapter', fontsize=16)",
      "sns.palplot(colors, size=0.2)",
      "ax.text(s='Chapters I to XII', x=-40, y=-5)",
    ],
  },
];
