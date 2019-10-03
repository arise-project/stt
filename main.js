const speech = require('@google-cloud/speech');
const path = require('path');

const client = new speech.SpeechClient();

  const gcsUri = 'gs://staging.alien-dialect-254414.appspot.com/nilofer-merchant-got-a-meeting-take-a-walk.flac';
  const encoding = 'FLAC';
  const languageCode = 'en-US';

  const config = {
    enableWordTimeOffsets: true,
    encoding: encoding,
    languageCode: languageCode,
	sampleRateHertz: 48000
  };

  const audio = {
    uri: gcsUri,
  };

  const request = {
    config: config,
    audio: audio,
};

client
  .longRunningRecognize(request)
  .then(data => {
    const operation = data[0];
    // Get a Promise representation of the final result of the job
    return operation.promise();
  })
  .then(data => {
    const response = data[0];
    var subContent = "";
    response.results.forEach(result => {
      console.log(`Transcription: ${result.alternatives[0].transcript}`);
      subContent = subContent + result.alternatives[0].transcript;
	  result.alternatives[0].words.forEach(wordInfo => {
        // NOTE: If you have a time offset exceeding 2^32 seconds, use the
        // wordInfo.{x}Time.seconds.high to calculate seconds.
        const startSecs =
          `${wordInfo.startTime.seconds}` +
          `.` +
          wordInfo.startTime.nanos / 100000000;
        const endSecs =
          `${wordInfo.endTime.seconds}` +
          `.` +
          wordInfo.endTime.nanos / 100000000;
        console.log(`Word: ${wordInfo.word}`);
        console.log(`\t ${startSecs} secs - ${endSecs} secs`);

      });
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });