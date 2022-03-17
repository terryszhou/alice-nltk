interface figureDataProps {
  fig: string,
  code: string[],
};

export const figureData: figureDataProps[] = [
  {
    fig: "/images/alice_chap_sent_count_graph.png",
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
