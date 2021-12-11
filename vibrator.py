import math
import sys
import re
import json
import numpy as np

if len(sys.argv) != 4:
    exit(1)
filename = str(sys.argv[1])
wave_number = int(sys.argv[2])
amplitude = float(sys.argv[3])

filename_updated = re.sub('^(.*)\\.(.*)$', '\\1_generated.\\2', filename)
with open(filename, 'r', encoding='utf-8') as song:
    song_data = song.read()

song_data = json.loads(song_data.replace('\0', ''))
pitch_list = song_data['tracks'][0]['mainGroup']['parameters']['pitchDelta']['points']
pitch_range_begin = pitch_list[0]
pitch_range_end = pitch_list[len(pitch_list) - 2]
pitch_sample = np.linspace(pitch_range_begin, pitch_range_end, wave_number * 20)
pitch_list_updated = []
for i in range(0, len(pitch_sample)):
    pitch_list_updated.append(pitch_sample[i])
    tray = amplitude * math.sin((2 * math.pi * wave_number / (pitch_range_end - pitch_range_begin))
                                * (pitch_sample[i] - pitch_range_begin))
    pitch_list_updated.append(tray)
song_data_updated = song_data
song_data_updated['tracks'][0]['mainGroup']['parameters']['pitchDelta']['points'] = pitch_list_updated

with open(filename_updated, 'w', encoding='utf-8') as song_updated:
    song_updated.write(json.dumps(song_data_updated))
    song_updated.write('\0')
