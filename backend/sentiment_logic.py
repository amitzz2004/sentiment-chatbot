from textblob import TextBlob

def analyze_sentiment(text):
    polarity = TextBlob(text).sentiment.polarity

    if polarity > 0.1:
        label = "Positive"
    elif polarity < -0.1:
        label = "Negative"
    else:
        label = "Neutral"

    return {"label": label, "score": polarity}
