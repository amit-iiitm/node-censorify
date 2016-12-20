var censored_words=["sad","bad","mad"]

var custom_censor_words=[];

function censor(in_string){
	for (idx in censored_words){
		in_string=in_string.replace(censored_words[idx],"****");	
	}
	
	for (idx in custom_censored_words){
		in_string=in_string.replace(custom_censored_words[idx],"****");	
	}
	return in_string;
}

function add_censored_words(word){
	custom_censor_words.push(word);
}

function get_censored_words{
	return censored_words.concat(custom_censored_words);
}

exports.censor=censor;
exports.add_censored_word=add_censored_word;
exports.get_censored_word=get_censored_word;
