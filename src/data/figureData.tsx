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
    fillColor: "#993b62",
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
