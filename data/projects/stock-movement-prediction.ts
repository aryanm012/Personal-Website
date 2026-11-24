import type { Project } from "./types";

const stockNotebook = {
  href: "https://github.com/jli433/FAANG_Monthly_Stock_Prediction/blob/main/data.ipynb",
  label: "Open the Stock Movement Prediction notebook on GitHub",
};

const stockPriceHistory = {
  src: "/images/stock-movement-prediction/price-history.png",
  alt: "Line chart showing average stock prices over time for Apple, Amazon, Google, Meta, Microsoft, and Nvidia",
  width: 1389,
  height: 690,
};

export const stockMovementPrediction = {
  slug: "stock-movement-prediction",
  title: "Stock Movement Prediction",
  area: "Machine learning",
  summary:
    "Trained a random forest to predict whether six major technology stocks would gain at least 1% over the next 20 trading days.",
  featured: {
    summary: "Used historical market data to predict gains of at least 1% over 20 trading days for six major technology stocks.",
    thumbnail: stockPriceHistory,
    showRepository: false,
  },
  result: "72.25% test accuracy · 78% precision · 75% recall",
  technologies: ["Python", "Pandas", "scikit-learn"],
  repository: stockNotebook.href,
  caseStudy: {
    preview: { ...stockPriceHistory, link: stockNotebook },
    problem: "Short-term stock movements are difficult to predict because prices respond to changing market conditions and unexpected events. I tested whether historical data could predict a gain of at least 1% over 20 trading days for Meta, Apple, Amazon, Nvidia, Microsoft, and Google, and which indicators improved those predictions.",
    solution: "I engineered features from historical stock data across five categories: momentum, trends, volatility, volume, and relative market performance. I compared K-nearest neighbors, a decision tree, logistic regression, and a random forest. The random forest had the strongest baseline performance, so I selected it for hyperparameter tuning.",
    technicalDetails: {
      heading: "Feature analysis",
      body: "I used permutation importance to measure how shuffling each feature affected model performance. Market return, relative strength, and daily return scored below zero in the initial analysis. I reduced the feature set from 37 to 13. In the reduced model, the MACD signal, both Bollinger Bands, and 30-day volatility ranked highest.",
      image: {
        src: "/images/stock-movement-prediction/permutation-importance.png",
        alt: "Horizontal bar chart ranking the 13 retained features by permutation importance, led by the MACD signal, lower and upper Bollinger Bands, and 30-day volatility",
        width: 915,
        height: 682,
        caption: "Permutation importance for the 13 features retained by the final random forest.",
      },
    },
    bottleneck: "The training labels were imbalanced, and deep trees risked overfitting. I used class weighting and constrained tree complexity during tuning.",
    metrics: {
      heading: "Results",
      summary: "The evaluation prioritized a balance between precision and recall while controlling overfitting. Further chronological validation would help assess how well the model generalizes to future market conditions.",
      items: [
        { label: "Test accuracy", value: "72.25%", context: "Across 2,933 test samples" },
        { label: "Precision", value: "78%", context: "Of predicted gains that met the 1% threshold" },
        { label: "Recall", value: "75%", context: "Of actual gains that met the 1% threshold" },
        { label: "Gains correctly identified", value: "1,324", context: "True positives in the test set" },
      ],
    },
    skills: [
      "Feature engineering",
      "Classification model evaluation",
      "Hyperparameter tuning",
      "Class imbalance handling",
      "Permutation importance",
    ],
  },
} satisfies Project;
