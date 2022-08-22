var scriptTitle = "Synthesizer V Installer Downloader";
var creditTitle = "dawnsqrl";
var hintMessageConfirm = "Click \"" + SV.T("OK") + "\" to confirm."
var hintMessageConfirmReturn = "Click \"" + SV.T("Yes") + "\" to confirm and \"" + SV.T("No") + "\" to go back."
var selectionSummary = "Current selection: "
var sourceSelectorTitle = "Please select a download source."
var itemSelectorTitle = "Please select a product."
var versionSelectorTitle = "Please select the version to download."
var finishTitle = "Installer link copied to clipboard"
var finishMessage = "Please paste link into browser to download."

function getTranslations(langCode) {
    var translation = [
        [scriptTitle, "Synthesizer V 安装包下载"],
        [creditTitle, "凌雾松鼠"],
        [link_source_s1, "百度网盘"],
        [link_source_s2, "Google Drive"],
        [link_source_s3, "AHS 资源服务器"],
        [link_source_s4, "Dreamtonics 资源服务器"],
        [link_source_s5, "Dreamtonics 更新服务器"],
        [item_source_medium5, "五维介质"],
        [item_version_latest, "最新版本"],
        [item_version_previous, "历史版本"]
    ]
    if (langCode == "zh-cn") {
        return translation.concat([
            [hintMessageConfirm, "单击 \"" + SV.T("OK") + "\" 确认当前选择。"],
            [hintMessageConfirmReturn, "单击 \"" + SV.T("Yes") + "\" 确认当前选择，单击 \"" + SV.T("No") + "\" 返回上一选择。"],
            [selectionSummary, "当前选择："],
            [sourceSelectorTitle, "请选择一个链接源。"],
            [itemSelectorTitle, "请选择一个产品。"],
            [versionSelectorTitle, "请选择一个版本。"],
            [finishTitle, "安装包链接已复制到剪贴板"],
            [finishMessage, "请粘贴至浏览器中进行下载。"]
        ]);
    }
    if (langCode == "zh-abs") {
        return [
            [hintMessageConfirm, "点 \"" + SV.T("OK") + "\" 确认"],
            [hintMessageConfirmReturn, "点 \"" + SV.T("Yes") + "\" 确认，点 \"" + SV.T("No") + "\" 返回"],
            [selectionSummary, "已选："],
            [sourceSelectorTitle, "链接源"],
            [itemSelectorTitle, "项目"],
            [versionSelectorTitle, "版本"],
            [finishTitle, "链接已复制"],
            [finishMessage, "粘贴至浏览器下载"]
        ];
    }
    return [];
}

function getClientInfo() {
    return {
        "name": SV.T(scriptTitle),
        "author": SV.T(creditTitle),
        "versionNumber": 0,
        "minEditorVersion": 65537
    };
}

var link_source_s1 = "Baidu Netdisk"
var link_source_s2 = "Google Drive"
var link_source_s3 = "AHS resource"
var link_source_s4 = "Dreamtonics resource"
var link_source_s5 = "Dreamtonics download"
var item_source_medium5 = "MEDIUM5"
var item_version_latest = "Latest version"
var item_version_previous = "Older version"
var link_source = [
    [link_source_s1, "https://pan.baidu.com/s/"],
    [link_source_s2, "https://drive.google.com/drive/folders/"],
    [link_source_s3, "https://www.ah-soft.com/trial/"],
    [link_source_s4, "https://resource.dreamtonics.com/"],
    [link_source_s5, "https://download.dreamtonics.com/"]
]
var item_source_s1 = [
    [0, "ANRI", "1yJRKFzs4mKd5JcdSZRknlA&pwd=45xv"],
    [0, "Eleanor Forte AI", "1_NGD1wwA2JLp4_NPLqOfNA&pwd=aiko"],
    [0, item_source_medium5, "191-AKUkhnlffxz-E11CsVw&pwd=day0"]
]
var item_source_s2 = [
    [0, "ANRI (Lite)", "1qJu4kPhzL3NrNlwneFHSgSk2FXlBfBYL"],
    [0, "AiKO", "1OeGLkNQHSOJTeWxmIK0F9nKhOa5HaopP"],
    [0, "AiKO (Lite)", "141F-qnfeR5_SpD35IHLKiVppD4nzqLsG"],
    [0, "Eleanor Forte (Lite)", "1ScZ8WSuGm27b5B0jMPge6_HioI_mgD5u"],
    [0, "Eleanor Forte AI", "1bq8ifU6xpimnkVFljvLaSBz52bRjLxtS"],
    [0, "Eleanor Forte AI (Lite)", "10bfLbZ57gJJyEH6Wlz3_MFocp31ED2Vr"],
    [0, "GENBU", "1l7rXGGSp55A0QrA7Xki6RzT1EUwUqOx0"],
    [0, "GENBU (Lite)", "141F-qnfeR5_SpD35IHLKiVppD4nzqLsG"],
    [0, "Yamine Renri", "10ggCjLMyzxehFV_JBJzO14GPJypUt-sw"],
    [0, "MEDIUM5·Cangqiong", "1P5muel1FwWZ16AlOkxOZwPW6-PJK-qfi"],
    [0, "MEDIUM5·Chiyu", "1a4gBQh3o4eqQ5g_Svn3NLcAXkTz7Y3VM"],
    [0, "MEDIUM5·Chiyu (Lite)", "1DQAAUwbdEoxl4EzzbDxQVNHUDA89CFzu"],
    [0, "MEDIUM5·Haiyi", "1MYju8KkaYPfR_aGquwr8FvkuHz194Ddh"],
    [0, "MEDIUM5·Shian", "1U-ipVW6jG49lfLhiLUmVTE14OEMsHQVe"],
    [0, "Saki (Lite)", "1lRr7aqcmQ8IYOvwh8Y7Orz9wJaibno09"],
    [0, "Saki AI", "1a9j7lE728TJVEdo4FyA26Xmi_KgHQTHh"],
    [1, "SOLARIA", ["1j84JI067Ms0DMRGjh9MDA7FAKDURFGpb", "11GYE6xkZvLZKABsZGzLrOiW7p009ko9r"], [item_version_latest, item_version_previous]],
    [0, "SOLARIA (Lite)", "14gR5JUMThteD2yvgqE3ORiXDcXltToyT"]
]
var item_source_s3 = [
    [0, "Koharu Rikka (Lite)", "synthesizer_v_rikka_lite.zip"],
    [0, "Koharu Rikka AI (Lite)", "synthesizer_v_rikka_ai_lite.zip"],
    [0, "Kotonoha Akane & Aoi (Lite)", "synthesizer_v_kotonoha_lite.zip"],
    [0, "Kyomachi Seika (Lite)", "synthesizer_v_seika_lite.zip"],
    [0, "Kyomachi Seika AI (Lite)", "synthesizer_v_ai_seika_lite.zip"],
    [0, "Natsuki Karin AI (Lite)", "synthesizer_v_ai_karin_lite.zip"],
    [0, "Tsuina-Chan (Lite)", "synthesizer_v_tsuina_lite.zip"],
    [0, "Tsuina-Chan AI (Lite)", "synthesizer_v_ai_tsuina_lite.zip"],
    [0, "Tsurumaki Maki (ENG Lite)", "synthesizer_v_maki_english_lite.zip"],
    [0, "Tsurumaki Maki (JPN Lite)", "synthesizer_v_maki_lite.zip"],
    [0, "Tsurumaki Maki AI (ENG Lite)", "synthesizer_v_maki_english_ai_lite.zip"],
    [0, "Tsurumaki Maki AI (JPN Lite)", "synthesizer_v_maki_ai_lite.zip"],
    [0, "Saki (Lite)", "synthesizer_v_saki_lite.zip"],
    [0, "Saki AI (Lite)", "synthesizer_v_saki_ai_lite.zip"]
]
var item_source_s4 = [
    [2, "Koharu Rikka (Lite)", "download/Voice%20Databases/rikka-installer-lite-", [100]],
    [2, "Koharu Rikka AI (Lite)", "download/Voice%20Databases/rikka-ai-lite-install-", [101]],
    [2, "Tsurumaki Maki AI (ENG Lite)", "download/Voice%20Databases/Tsurumaki%20Maki%20%28Lite%29/maki-ai-eng-lite-installer-v", [101]],
    [2, "Tsurumaki Maki AI (JPN Lite)", "download/Voice%20Databases/Tsurumaki%20Maki%20%28Lite%29/maki-ai-jpn-lite-installer-v", [101]],
    [2, "AiKO (Lite)", "download/Voice%20Databases/aiko-lite-install-", [100]],
    [2, "Eleanor Forte (Lite)", "download/Voice%20Databases/eleanor-lite-install-", [100]],
    [2, "GENBU (Lite)", "download/Voice%20Databases/genbu-lite-install-", [100]],
    [2, "MEDIUM5·Chiyu (Lite)", "download/Voice%20Databases/chiyu-lite-install-", [100]],
    [2, "Saki (Lite)", "download/Voice%20Databases/saki-lite-install-", [100]],
    [2, "Saki AI", "download-unlist/saki/saki-ai-install-", [100, 104]],
    [2, "Saki AI (Lite)", "download/Voice%20Databases/saki-ai-lite-install-", [101]],
]
var item_source_s5 = [
    [2, "Koharu Rikka AI", "rikka_ai/rikka-ai-installer-", [105, 109, 113, 116]],
    [2, "Koharu Rikka AI (Lite)", "rikka_ai/rikka-ai-lite-install-", [101]],
    [2, "Kyomachi Seika AI", "seika/seika-ai-install-", [102, 106]],
    [2, "Natsuki Karin AI", "karin_ai/karin-ai-installer-v", [104]],
    [2, "Tsuina-Chan AI", "tsuina/tsuina-ai-install-", [103, 106]],
    [2, "Tsurumaki Maki AI (ENG)", "maki_ai/maki-ai-eng-installer-v", [102, 103, 106]],
    [2, "Tsurumaki Maki AI (ENG Lite)", "maki_ai/maki-ai-eng-lite-installer-v", [101]],
    [2, "Tsurumaki Maki AI (JPN)", "maki_ai/maki-ai-jpn-installer-v", [105, 107, 111]],
    [2, "Tsurumaki Maki AI (JPN Lite)", "maki_ai/maki-ai-jpn-lite-installer-v", [101]],
    [2, "ANRI", "anri/anri-ai-installer-v", [103, 104, 105]],
    [2, "Eleanor Forte AI", "eleanor/eleanor-ai-installer-v", [102, 103, 105]],
    [2, "MEDIUM5·Haiyi", "haiyi/haiyi-update-", [101]],
    [2, "MEDIUM5·Stardust", "stardust-uWFhGMhFo3aYBXM6aYqn/stardust-install-", [102]],
    [2, "An Xiao", "anxiao-pfdwHLxzebbVGUzhMJWo/anxiao-install-", [100, 101, 103]],
    [2, "Feng Yi", "fengyi-GEkamWKYvBdwC7gdNLyo/fengyi-install-", [100, 103]],
    [2, "Kevin", "kevin-JvTKcrDHHeX4uKRqwxwD/kevin-ai-installer-", [100, 102, 106]],
    [2, "Mo Chen", "mochen-Ly8CLo3UG43XAzmym2nQ/mochen-install-", [100, 103]],
    [2, "Qing Su", "qingsu-FBmY8JoBssnkq8BHKHwy/qingsu-install-", [103, 105, 111]],
    [2, "Ryo AI", "ryo-cmXEUnrbDtYZJRyCBigG/ryo-ai-install-", [100, 102, 106]],
    [2, "Saki", "saki-nvmyYRZtM3xEpsYreAJm/saki-install-", [100]],
    [2, "Saki AI", "saki_ai-xEZbEWGzwmZK43QKeZ6N/saki-ai-install-", [104, 110, 115, 118, 119, 123]],
    [2, "Saki AI (Lite)", "saki_ai_lite-MLpeBq8YxPWUh673NLfL/saki-ai-lite-install-", [101]],
    [2, "Weina", "weina/weina-installer-v", [100]],
    [2, "SOLARIA", "solaria/solaria-installer-v", [101, 103, 104, 106]]
]

var source, item, version
var item_source

function setItemSource() {
    if (source === 0) {
        item_source = item_source_s1
    } else if (source === 1) {
        item_source = item_source_s2
    } else if (source === 2) {
        item_source = item_source_s3
    } else if (source === 3) {
        item_source = item_source_s4
    } else if (source === 4) {
        item_source = item_source_s5
    } else {
        item_source = []
    }
}

function showSource() {
    var dialog = {
        "title": SV.T(scriptTitle) + " by " + SV.T(creditTitle),
        "message": SV.T(hintMessageConfirm),
        "buttons": "OkCancel",
        "widgets": [
            {
                "name": "select",
                "type": "ComboBox",
                "label": SV.T(sourceSelectorTitle),
                "choices": [],
                "default": 0
            }
        ]
    }
    for (var entry in link_source) {
        dialog["widgets"][0]["choices"].push(SV.T(link_source[entry][0]))
    }
    return SV.showCustomDialog(dialog)
}

function showItem() {
    var dialog = {
        "title": SV.T(scriptTitle) + " by " + SV.T(creditTitle),
        "message": SV.T(hintMessageConfirmReturn) + "\n\n" + SV.T(selectionSummary) + SV.T(link_source[source][0]),
        "buttons": "YesNoCancel",
        "widgets": [
            {
                "name": "select",
                "type": "ComboBox",
                "label": SV.T(itemSelectorTitle),
                "choices": [],
                "default": 0
            }
        ]
    }
    for (var entry in item_source) {
        dialog["widgets"][0]["choices"].push(SV.T(item_source[entry][1]))
    }
    return SV.showCustomDialog(dialog)
}

function showVersion() {
    var dialog = {
        "title": SV.T(scriptTitle) + " by " + SV.T(creditTitle),
        "message": SV.T(hintMessageConfirmReturn)
            + "\n\n" + SV.T(selectionSummary) + SV.T(link_source[source][0])
            + " → " + SV.T(item_source[item][1]),
        "buttons": "YesNoCancel",
        "widgets": [
            {
                "name": "select",
                "type": "ComboBox",
                "label": SV.T(versionSelectorTitle),
                "choices": [],
                "default": 0
            }
        ]
    }
    if (item_source[item][0] > 0) {
        for (var entry in item_source[item][3]) {
            dialog["widgets"][0]["choices"].push(SV.T(item_source[item][3][entry]))
        }
    } else {
        SV.finish()
    }
    return SV.showCustomDialog(dialog)
}

function main() {
    var state = 0
    while (true) {
        if (state === 0) {
            var response = showSource()
            if (response.status) {
                source = parseInt(response.answers.select)
                setItemSource()
                state++
            } else {
                break
            }
        } else if (state === 1) {
            var response = showItem()
            if (response.status == "Yes") {
                item = parseInt(response.answers.select)
                if (item_source[item][0] > 0) {
                    state++
                } else {
                    SV.setHostClipboard(link_source[source][1] + item_source[item][2])
                    SV.showMessageBox(SV.T(finishTitle), SV.T(finishMessage)
                        + "\n\n" + SV.T(selectionSummary) + SV.T(link_source[source][0])
                        + " → " + SV.T(item_source[item][1]));
                    break
                }
            } else if (response.status == "No") {
                state--
            } else {
                break
            }
        } else if (state === 2) {
            var response = showVersion()
            if (response.status == "Yes") {
                version = parseInt(response.answers.select)
                if (item_source[item][0] === 1) {
                    SV.setHostClipboard(link_source[source][1] + item_source[item][2][version])
                    SV.showMessageBox(SV.T(finishTitle), SV.T(finishMessage)
                        + "\n\n" + SV.T(selectionSummary) + SV.T(link_source[source][0])
                        + " → " + SV.T(item_source[item][1]) + ' ' + SV.T(item_source[item][3][version]));
                } else if (item_source[item][0] === 2) {
                    SV.setHostClipboard(link_source[source][1] + item_source[item][2] + item_source[item][3][version] + ".svpk")
                    SV.showMessageBox(SV.T(finishTitle), SV.T(finishMessage)
                        + "\n\n" + SV.T(selectionSummary) + SV.T(link_source[source][0])
                        + " → " + SV.T(item_source[item][1]) + " (ver. " + SV.T(item_source[item][3][version]) + ')');
                }
                break
            } else if (response.status == "No") {
                state--
            } else {
                break
            }
        } else {
            break
        }
    }
    SV.finish()
}
