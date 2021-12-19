var scriptTitle = "Play with Fixed Playhead Position";
var creditTitle = " – by dawnsqrl";
var hintMessage = "Before execution, please move the playhead to the desired position in the leftmost screen of piano roll.";
var updateIntervalTitle = "View update interval"
var updateIntervalFormat = "%.0f ms"
var restartPlayTitle = "Play from beginning"
var updateInterval;
var playheadPercentage;

function getTranslations(langCode) {
  if (langCode == "zh-cn") {
    return [
      [scriptTitle, "播放并固定相对播放位置"],
      [creditTitle, " by 凌雾松鼠"],
      [hintMessage, "执行前，请将起始播放位置移至钢琴卷帘最左侧屏范围内。"],
      [updateIntervalTitle, "视图更新周期"],
      [updateIntervalFormat, "%.0f毫秒"],
      [restartPlayTitle, "从头开始播放"]
    ];
  }
  return [];
}

function getClientInfo() {
  return {
    "name": SV.T(scriptTitle),
    "author": "dawnsqrl",
    "versionNumber": 0,
    "minEditorVersion": 65537
  };
}

function getBlickFromPlayhead() {
  var playheadTime = SV.getPlayback().getPlayhead();
  var timeAxis = SV.getProject().getTimeAxis();
  return timeAxis.getBlickFromSeconds(playheadTime);
}

function shiftView(coordinateSystem) {
  var viewRange = coordinateSystem.getTimeViewRange();
  var updatedPlayheadPercentage = (getBlickFromPlayhead() - viewRange[0]) / (viewRange[1] - viewRange[0]);
  coordinateSystem.setTimeLeft(viewRange[0] + (viewRange[1] - viewRange[0]) * (updatedPlayheadPercentage - playheadPercentage));
}

function cycleTimeout() {
  if (SV.getPlayback().getStatus() == "stopped") SV.finish();
  shiftView(SV.getMainEditor().getNavigation());
  shiftView(SV.getArrangement().getNavigation());
  SV.setTimeout(updateInterval, cycleTimeout);
}

function main() {
  var dialog = {
    "title": SV.T(scriptTitle) + SV.T(creditTitle),
    "message": SV.T(hintMessage),
    "buttons": "OkCancel",
    "widgets": [
      {
        "name": "update_interval",
        "type": "Slider",
        "label": SV.T(updateIntervalTitle),
        "format": SV.T(updateIntervalFormat),
        "minValue": 0,
        "maxValue": 100,
        "interval": 1,
        "default": 10
      },
      {
        "name": "restart_play",
        "type": "CheckBox",
        "text": SV.T(restartPlayTitle),
        "default": false
      },
    ]
  };
  var response = SV.showCustomDialog(dialog);
  var viewRange = SV.getMainEditor().getNavigation().getTimeViewRange();
  var playback = SV.getPlayback();
  if (response.status) {
    playheadPercentage = (getBlickFromPlayhead() - viewRange[0]) / (viewRange[1] - viewRange[0]);
    updateInterval = response.answers.update_interval;
    playback.play();
    if (response.answers.restart_play) {
      SV.setTimeout(playback.getPlayhead() * 1000, cycleTimeout);
      playback.seek(0);
    } else cycleTimeout();
  } else SV.finish();
}
