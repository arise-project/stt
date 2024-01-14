# Google Cloud Speech-to-Text Transcription Script

This Node.js script utilizes the `@google-cloud/speech` library to transcribe audio from a Google Cloud Storage (GCS) file. It supports specifying the GCS file URL, audio encoding, and language code.

## Prerequisites

1. **Google Cloud Platform (GCP) Account**: Ensure that you have a GCP account with the Speech-to-Text API enabled.

2. **Authentication**: Set up authentication by creating a service account key file and setting the `GOOGLE_APPLICATION_CREDENTIALS` environment variable. Follow the [official GCP documentation](https://cloud.google.com/speech-to-text/docs/quickstart).

3. **Node.js**: Make sure you have Node.js installed on your machine. If not, you can download it [here](https://nodejs.org/).

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/arise-project/stt.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd stt
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

Run the script with the following command:

```bash
node transcribe.js --gcsUrl <GCS_URL> --encoding <AUDIO_ENCODING> --languageCode <LANGUAGE_CODE>
