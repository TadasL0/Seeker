import boto3
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# setup session
lex_model_build_client = boto3.client('lex-models')
lex_runtime_client = boto3.client('lex-runtime')

# setup model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("Qiliang/bart-large-cnn-samsum-ChatGPT_v3")
model = AutoModelForSeq2SeqLM.from_pretrained("Qiliang/bart-large-cnn-samsum-ChatGPT_v3")

def lambda_handler(event, context):
    # get user input from event
    user_input = event['inputTranscript']

    # encode user input
    input_ids = tokenizer.encode(user_input, return_tensors='pt')

    # generate response
    output = model.generate(input_ids)
    response = tokenizer.decode(output[0], skip_special_tokens=True)

    # send response to lex
    lex_runtime_client.post_text(botName='YOUR_BOT_NAME', botAlias='YOUR_BOT_ALIAS', userId='USER_ID', inputText=response)
