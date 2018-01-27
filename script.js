let show_keys = true;
const locations = { 0: '', 1: 'Left ', 2: 'Right ', 3: "Numpad " };
const keys = {
    'a':'a', 'b':'b', 'c':'c', 'd':'d', 'e':'e', 'f':'f', 'g':'g', 'h':'h', 'i':'i', 'j':'j', 'k':'k', 'l':'l', 'm':'m', 'n':'n', 'o':'o', 'p':'p',   'q':'q', 'r':'r',   's':'s', 't':'t', 'u':'u', 'v':'v', 'w':'w', 'x':'x', 'y':'y', 'z':'z', 
    'A':'A', 'B':'B', 'C':'C', 'D':'D', 'E':'E', 'F':'F', 'G':'G', 'H':'H', 'I':'I', 'J':'J', 'K':'K', 'L':'L', 'M':'M', 'N':'N', 'O':'O', 'P':'P',   'Q':'Q', 'R':'R',   'S':'S', 'T':'T', 'U':'U', 'V':'V', 'W':'W', 'X':'X', 'Y':'Y', 'Z':'Z', 
    '`':'`', '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8', '9':'9', '0':'0', '-':'-', '=':'=', '[':'[', ']':']', '\\':'\\', ';':';', '\'':'\'', ',':',', '.':'.', '/':'/', 
    '~':'~', '!':'!', '@':'@', '#':'#', '$':'$', '%':'%', '^':'^', '&':'&', '*':'*', '(':'(', ')':')', '_':'_', '+':'+', '{':'{', '}':'}', '|':'|',   ':':':', '"':'"',   '<':'<', '>':'>', '?':'?', 
    'Unidentified':'The user agent wasn\'t able to map the event\'s virtual keycode to a specific key value. This can happen due to hardware or software constraints, or because of constraints around the platform on which the user agent is running.',
    'Alt':'The Alt (Alternative) key.',
    'AltGraph':'The AltGr or AltGraph (Alternate Graphics) key. Enables the ISO Level 3 shift modifier (where Shift is the level 2 modifier).',
    'CapsLock':'The Caps Lock key. Toggles the capital character lock on and off for subsequent input.',
    'Control':'The Control, Ctrl, or Ctl key. Allows typing control characters.',
    'Fn':'The Fn (Function modifier) key. Used to allow generating function key (F1-F15, for instance) characters on keyboards without a dedicated function key area. Often handled in hardware so that events aren\'t generated for this key.',
    'FnLock':'The FnLock or F-Lock (Function Lock) key.Toggles the function key mode described by "Fn" on and off. Often handled in hardware so that events aren\'t generated for this key.',
    'Hyper':'The Hyper key.',
    'OS':'The Meta key. Allows issuing special command inputs. This is the Windows logo key, or the Command or ⌘ key on Mac keyboards.',
    'NumLock':'The NumLock (Number Lock) key. Toggles the numeric keypad between number entry some other mode (often directional arrows).',
    'ScrollLock':'The Scroll Lock key. Toggles beteen scrolling and cursor movement modes.',
    'Shift':'The Shift key. Modifies keystrokes to allow typing upper (or other) case letters, and to support typing punctuation and other special characters.',
    'Super':'The Super key.',
    'Symbol':'The Symbol modifier key (found on certain virtual keyboards).',
    'SymbolLock':'The Symbol Lock key.',
    'Enter':'The Enter or ↵ key (sometimes labeled Return).',
    'Tab':'The Horizontal Tab key, Tab.',
    ' ':'The space key, Space Bar.',
    'ArrowDown':'The down arrow key.',
    'ArrowLeft':'The left arrow key.',
    'ArrowRight':'The right arrow key.',
    'ArrowUp':'The up arrow key.',
    'End':'The End key. Moves to the end of content.',
    'Home':'The Home key. Moves to the start of content.',
    'PageDown':'The Page Down (or PgDn) key. Scrolls down or displays the next page of content.',
    'PageUp':'The Page Up (or PgUp) key. Scrolls up or displays the previous page of content.',
    'Backspace':'The Backspace key. This key is labeled Delete on Mac keyboards.',
    'Clear':'The Clear key. Removes the currently selected input.',
    'Copy':'The Copy key (on certain extended keyboards).',
    'CrSel':'The Cursor Select key, CrSel.',
    'Cut':'The Cut key (on certain extended keyboards).',
    'Delete':'The Delete key, Del.',
    'EraseEof':'Erase to End of Field. Deletes all characters from the current cursor position to the end of the current field.',
    'ExSel':'The ExSel (Extend Selection) key.',
    'Insert':'The Insert key, Ins. Toggles  between inserting and overwriting text.',
    'Paste':'Paste from the clipboard.',
    'Redo':'Redo the last action.',
    'Undo':'Undo the last action.',
    'Accept':'The Accept, Commit, or OK key or button. Accepts the currently selected option or input method sequence conversion.',
    'Again':'The Again key. Redoes or repeats a previous action.',
    'Attn':'The Attn (Attention) key.',
    'Cancel':'The Cancel key.',
    'ContextMenu':'Shows the context menu. Typically found between the Windows (or OS) key and the Control key on the right side of the keyboard.',
    'Escape':'The Esc (Escape) key. Typically used as an exit, cancel, or "escape this operation" button. Historically, the Escape character was used to signal the start of a special control sequence of characters called an "escape sequence."',
    'Execute':'The Execute key.',
    'Find':'The Find key. Opens an interface (typically a dialog box) for performing a find/search operation.',
    'Finish':'The Finish key.',
    'Help':'The Help key. Opens or toggles the display of help information.',
    'Pause':'The Pause key. Pauses the current application or state, if applicable. This shouldn\'t be confused with the "MediaPause" key value, which is used for media controllers, rather than to control applications and processes.',
    'Play':'The Play key. Resumes a previously paused application, if applicable. This shouldn\'t be confused with the "MediaPlay" key value, which is used for media controllers, rather than to control applications and processes.',
    'Props':'The Props (Properties) key.',
    'Select':'The Select key.',
    'ZoomIn':'The ZoomIn key.',
    'ZoomOut':'The ZoomOut key.',
    'BrightnessDown':'The Brightness Down key. Typically used to reduce the brightness of the display.',
    'BrightnessUp':'The Brightness Up key. Typically increases the brightness of the display.',
    'Eject':'The Eject key. Ejects removable media (or toggles an optical storage device tray open and closed).',
    'LogOff':'The LogOff key.',
    'Power':'The Power button or key, to toggle power on and off. Not all systems pass this key through to to the user agent.',
    'PowerOff':'The PowerOff or PowerDown key. Shuts off the system.',
    'PrintScreen':'The PrintScreen or PrtScr key. Sometimes SnapShot. Captures the screen and prints it or saves it to disk.',
    'Hibernate':'The Hibernate key. This saves the state of the computer to disk and then shuts down; the computer can be returned to its previous state by restoring the saved state information.',
    'Standby':'The Standby key; also known as Suspend or Sleep. This turns off the display and puts the computer in a low power consumption mode, without completely powering off.',
    'WakeUp':'The WakeUp key; used to wake the computer from the hibernation or standby modes.',
    'AllCandidates':'The All Candidates key, which starts multi-candidate mode, in which multiple candidates are displayed for the ongoing input.',
    'Alphanumeric':'The Alphanumeric key.',
    'CodeInput':'The Code Input key, which enables code input mode, which lets the user enter characters by typing their code points (their Unicode character numbers, typically).',
    'Compose':'The Compose key.',
    'Convert':'The Convert key, which instructs the IME to convert the current input method sequence into the resulting character.',
    'Dead':'A dead "combining" key; that is, a key which is used in tandem with other keys to generate accented and other modified characters. If pressed by itself, it doesn\'t generate a character. If you wish to identify which specific dead key was pressed (in cases where more than one exists), you can do so by examining the KeyboardEvent\'s associated compositionupdate event\'s  data property.',
    'FinalMode':'The Final (Final Mode) key is used on some Asian keyboards to enter final mode when using IMEs.',
    'GroupFirst':'Switches to the first character group on an ISO/IEC 9995 keyboard. Each key may have multiple groups of characters, each in its own column. Pressing this key instructs the device to interpret keypresses as coming from the first column on subsequent keystrokes.',
    'GroupLast':'Switches to the last character group on an ISO/IEC 9995 keyboard.',
    'GroupNext':'Switches to the next character group on an ISO/IEC 9995 keyboard.',
    'GroupPrevious':'Switches to the previous character group on an ISO/IEC 9995 keyboard.',
    'ModeChange':'The Mode Change key. Toggles or cycles among input modes of IMEs.',
    'NextCandidate':'The Next Candidate function key. Selects the next possible match for the ongoing input.',
    'NonConvert':'The NonConvert ("Don\'t convert") key. This accepts the current input method sequence without running conversion when using an IME.',
    'PreviousCandidate':'The Previous Candidate key. Selects the previous possible match for the ongoing input.',
    'Process':'The Process key. Instructs the IME to process the conversion.',
    'SingleCandidate':'The Single Candidate key. Enables single candidate mode (as opposed to multi-candidate mode); in this mode, only one candidate is displayed at a time.',
    'HangulMode':'The Hangul (Korean character set) mode key, which toggles between Hangul and English entry modes.',
    'HanjaMode':'Selects the Hanja mode, for converting Hangul characters to the more specific Hanja characters.',
    'JunjaMode':'Selects the Junja mode, in which Korean is represented using single-byte Latin characters.',
    'Eisu':'The Eisu key. This key\'s purpose is defined by the IME, but may be used to close the IME.',
    'Hankaku':'The Hankaku (half-width characters) key.',
    'Hiragana':'The Hiragana key; selects Kana characters mode.',
    'HiraganaKatakana':'Toggles between the Hiragana and Katakana writing systems.',
    'KanaMode':'The Kana Mode (Kana Lock) key.',
    'KanjiMode':'The Kanji Mode key. Enables entering Japanese text using the ideographic characters of Chinese origin.',
    'Katakana':'The Katakana key.',
    'Romaji':'The Romaji key; selects the Roman character set.',
    'Zenkaku':'The Zenkaku (full width) characters key.',
    'ZenkakuHanaku':'The Zenkaku/Hankaku (full width/half width) toggle key.',
    'F1':'The first general-purpose function key, F1.',
    'F2':'The F2 key.',
    'F3':'The F3 key.',
    'F4':'The F4 key.',
    'F5':'The F5 key.',
    'F6':'The F6 key.',
    'F7':'The F7 key.',
    'F8':'The F8 key.',
    'F9':'The F9 key.',
    'F10':'The F10 key.',
    'F11':'The F11 key.',
    'F12':'The F12 key.',
    'F13':'The F13 key.',
    'F14':'The F14 key.',
    'F15':'The F15 key.',
    'F16':'The F16 key.',
    'F17':'The F17 key.',
    'F18':'The F18 key.',
    'F19':'The F19 key.',
    'F20':'The F20 key.',
    'Soft1':'The first general-purpose virtual function key.',
    'Soft2':'The second general-purpose virtual function key.',
    'Soft3':'The third general-purpose virtual function key.',
    'Soft4':'The fourth general-purpose virtual function key.',
    'AppSwitch':'Presents a list of recently-used applications which lets the user change apps quickly.',
    'Call':'The Call key; dials the number which has been entered.',
    'Camera':'The Camera key; activates the camera.',
    'CameraFocus':'The Focus key; focuses the camera.',
    'EndCall':'The End Call or Hang Up button.',
    'GoBack':'The Back button.',
    'GoHome':'The Home button, which takes the user to the phone\'s main screen (usually an application launcher).',
    'HeadsetHook':'The Headset Hook key. This is typically actually a button on the headset which is used to hang up calls and play or pause media.',
    'LastNumberRedial':'The Redial button, which redials the last-called number.',
    'Notification':'The Notification key.',
    'MannerMode':'A button which cycles among the notification modes: silent, vibrate, ring, and so forth.',
    'VoiceDial':'The Voice Dial key. Initiates voice dialing.',
    'ChannelDown':'Switches to the previous channel.',
    'ChannelUp':'Switches to the next channel.',
    'MediaFastForward':'Starts, continues, or increases the speed of fast forwarding the media.',
    'MediaPause':'Pauses the currently playing media. Some older applications use simply "Pause" but this is not correct.',
    'MediaPlay':'Starts or continues playing media at normal speed, if not already doing so. Has no effect otherwise.',
    'MediaPlayPause':'Toggles between playing and pausing the current media.',
    'MediaRecord':'Starts or resumes recording media.',
    'MediaRewind':'Starts, continues, or increases the speed of rewinding the media.',
    'MediaStop':'Stops the current media activity (such as playing, recording, pausing, forwarding, or rewinding). Has no effect if the media is currently stopped already.',
    'MediaTrackNext':'Seeks to the next media or program track.',
    'MediaTrackPrevious':'Seeks to the previous media or program track.',
    'AudioBalanceLeft':'Adjusts audio balance toward the left.',
    'AudioBalanceRight':'Adjusts audio balance twoard the right.',
    'AudioBassDown':'Decreases the amount of bass.',
    'AudioBassBoostDown':'Reduces bass boosting or cycles downward through bass boost modes or states.',
    'AudioBassBoostToggle':'Toggles bass boosting on and off.',
    'AudioBassBoostUp':'Increases the amoung of bass boosting, or cycles upward through a set of bass boost modes or states.',
    'AudioBassUp':'Increases the amount of bass.',
    'AudioFaderFront':'Adjusts the audio fader toward the front.',
    'AudioFaderRear':'Adjustts the audio fader toward the rear.',
    'AudioSurroundModeNext':'Selects the next available surround sound mode.',
    'AudioTrebleDown':'Decreases the amount of treble.',
    'AudioTrebleUp':'Increases the amount of treble.',
    'AudioVolumeDown':'Decreases the audio volume.',
    'AudioVolumeMute':'Mutes the audio.',
    'AudioVolumeUp':'Increases the audio volume.',
    'MicrophoneToggle':'Toggles the microphone on and off.',
    'MicrophoneVolumeDown':'Decreases the microphone\'s input volume.',
    'MicrophoneVolumeMute':'Mutes the microphone input.',
    'MicrophoneVolumeUp':'Increases the microphone\'s input volume.',
    'TV':'Switches into TV viewing mode.',
    'TV3DMode':'Toggles 3D TV mode on and off.',
    'TVAntennaCable':'Toggles between antenna and cable inputs.',
    'TVAudioDescription':'Toggles audio description mode on and off.',
    'TVAudioDescriptionMixDown':'Decreases trhe audio description\'s mixing volume; reduces the volume of the audio descriptions relative to the program sound.',
    'TVAudioDescriptionMixUp':'Increases the audio description\'s mixing volume; increases the volume of the audio descriptions relative to the program sound.',
    'TVContentsMenu':'Displays or hides the media contents available for playback (this may be a channel guide showing the currently airing programs, or a list of media files to play).',
    'TVDataService':'Displays or hides the TV\'s data service menu.',
    'TVInput':'Cycles the input mode on an external TV.',
    'TVInputComponent1':'Switches to the input "Component 1."',
    'TVInputComponent2':'Switches to the input "Component 2."',
    'TVInputComposite1':'Switches to the input "Composite 1."',
    'TVInputComposite2':'Switches to the input "Composite 2."',
    'TVInputHDMI1':'Switches to the input "HDMI 1."',
    'TVInputHDMI2':'Switches to the input "HDMI 2."',
    'TVInputHDMI3':'Switches to the input "HDMI 3."',
    'TVInputHDMI4':'Switches to the input "HDMI 4."',
    'TVInputVGA1':'Switches to the input "VGA 1."',
    'TVMediaContext':'The Media Context menu key.',
    'TVNetwork':'Toggle the TV\'s network connection on and off.',
    'TVNumberEntry':'Put the TV into number entry mode.',
    'TVPower':'The device\'s power button.',
    'TVRadioService':'Radio button.',
    'TVSatellite':'Satellite button.',
    'TVSatelliteBS':'Broadcast Satellite button.',
    'TVSatelliteCS':'Communication Satellite button.',
    'TVSatelliteToggle':'Toggles among available satellites.',
    'TVTerrestrialAnalog':'Selects analog terrestrial television service (analog cable or antenna reception).',
    'TVTerrestrialDigital':'Selects digital terrestrial television service (digital cable or antenna receiption).',
    'TVTimer':'Timer programming button.',
    'AVRInput':'Changes the input mode on an external audio/video receiver (AVR) unit.',
    'AVRPower':'Toggles the power on an external AVR unit.',
    'ColorF0Red':'General-purpose media function key, color-coded red; this has index 0 among the colored keys.',
    'ColorF1Green':'General-purpose media funciton key, color-coded green; this has index 1 among the colored keys.',
    'ColorF2Yellow':'General-purpose media funciton key, color-coded yellow; this has index 2 among the colored keys.',
    'ColorF3Blue':'General-purpose media funciton key, color-coded blue; this has index 3 among the colored keys.',
    'ColorF4Grey':'General-purpose media funciton key, color-coded grey; this has index 4 among the colored keys.',
    'ColorF5Brown':'General-purpose media funciton key, color-coded brown; this has index 5 among the colored keys.',
    'ClosedCaptionToggle':'Toggles closed captioning on and off.',
    'Dimmer':'Adjusts the brightness of the device by toggling between two brightness levels or by cycling among multiple brightness levels.',
    'DisplaySwap':'Cycles among video sources.',
    'DVR':'Switches the input source to the Digital Video Recorder (DVR).',
    'Exit':'The Exit button, which exits the curreent application or menu.',
    'FavoriteClear0':'Clears the program or content stored in the first favorites list slot.',
    'FavoriteClear1':'Clears the program or content stored in the second favorites list slot.',
    'FavoriteClear2':'Clears the program or content stored in the third favorites list slot.',
    'FavoriteClear3':'Clears the program or content stored in the fourth favorites list slot.',
    'FavoriteRecall0':'Selects (recalls) the program or content stored in the first favorites list slot.',
    'FavoriteRecall1':'Selects (recalls) the program or content stored in the second favorites list slot.',
    'FavoriteRecall2':'Selects (recalls) the program or content stored in the third favorites list slot.',
    'FavoriteRecall3':'Selects (recalls) the program or content stored in the fourth favorites list slot.',
    'FavoriteStore0':'Stores the current program or content into the first favorites list slot.',
    'FavoriteStore1':'Stores the current program or content into the second favorites list slot.',
    'FavoriteStore2':'Stores the current program or content into the third favorites list slot.',
    'FavoriteStore3':'Stores the current program or content into the fourth favorites list slot.',
    'Guide':'Toggles the display of the program or content guide.',
    'GuideNextDay':'If the guide is currently displayed, this button tells the guide to display the next day\'s content.',
    'GuidePreviousDay':'If the guide is currently displayed, this button tells the guide to display the previous day\'s content.',
    'Info':'Toggles the display of information about the currently selected content, program, or media.',
    'InstantReplay':'Tellls the device to perform an instant replay (typically some form of jumping back a short amount of time then playing it again, possibly but not usually in slow motion).',
    'Link':'Opens content liniked to the current program, if available and possible.',
    'ListProgram':'Lists the current program.',
    'LiveContent':'Toggles a display listing currently available live content or programs.',
    'Lock':'Locks or unlocks the currently selected content or pgoram.',
    'MediaApps':'Presents a list of media applications, such as photo viewers, audio and video players, and games.',
    'MediaAudioTrack':'The Audio Track key.',
    'MediaLast':'Jumps back to the last-viewed content, program, or other media.',
    'MediaSkipBackward':'Skips backward to the previous content or program.',
    'MediaSkipForward':'Skips forward to the next content or program.',
    'MediaStepBackward':'Steps backward to the previous content or program.',
    'MediaStepForward':'Steps forward to the next content or program.',
    'MediaTopMenu':'Top Menu button; opens the media\'s main menu, such as on a DVD or Blu-Ray disc.',
    'NavigateIn':'Navigates into a submenu or option.',
    'NavigateNext':'Navigates to the next item.',
    'NavigateOut':'Navigates out of the current screen or menu.',
    'NavigatePrevious':'Navigates to the previous item.',
    'NextFavoriteChannel':'Cycles to the next channel in the favorites list.',
    'NextUserProfile':'Cycles to the next saved user profile, if this feature is supported and multiple profiles exist.',
    'OnDemand':'Opens the user interface for selecting on demand content or programs to watch.',
    'Pairing':'Starts the process of pairing the remote with a device to be controlled.',
    'PinPDown':'A button to move the picture-in-picture view downward.',
    'PinPMove':'A button to control moving the picture-in-picture view.',
    'PinPToggle':'Toggles display of th epicture-in-picture view on and off.',
    'PinPUp':'A button to move the picture-in-picture view upward.',
    'PlaySpeedDown':'Decreases the media playback rate.',
    'PlaySpeedReset':'Returns the media playback rate to normal.',
    'PlaySpeedUp':'Increases the media playback rate.',
    'RandomToggle':'Toggles random media (also known as "shuffle mode") on and off.',
    'RcLowBattery':'A code sent when the remote control\'s battery is low. This doesn\'t actually correspond to a physical key at all.',
    'RecordSpeedNext':'Cycles among the available media recording speeds.',
    'RfBypass':'Toggles radio frequency (RF) input bypass mode on and off. RF bypass mode passes RF input directly to the RF output without any processing or filtering.',
    'ScanChannelsToggle':'Toggles the channel scan mode on and off; this is a mode which flips through channels automatically until the user stops the scan.',
    'ScreenModeNext':'Cycles through the available screen display modes.',
    'Settings':'Toggles display of the device\'s settings screen on and off.',
    'SplitScreenToggle':'Toggles split screen display mode on and off.',
    'STBInput':'Cycles among input modes on an external set-top box (STB).',
    'STBPower':'Toggles on and off an external STB.',
    'Subtitle':'Toggles the display of subtitles on and off if they\'re available.',
    'Teletext':'Toggles display of teletext, if available.',
    'VideoModeNext':'Cycles through the available video modes.',
    'Wink':'Causes the device to identify itself in some fashion, such as by flashing a light, briefly changing the brightness of indicator lights, or emitting a tone.',
    'ZoomToggle':'Toggles between full-screen and scaled content display, or otherwise change the magnification level.',
    'SpeechCorrectionList':'Presents a list of possible corrections for a word which was incorrectly identified.',
    'SpeechInputToggle':'Toggles between dictation mode and command/control mode. This lets the speech engine know whether to interpret spoken words as input text or as commands.',
    'Close':'Closes the current document or message. Must not exit the application.',
    'New':'Creates a new document or message.',
    'Open':'Opens an existing document or message.',
    'Print':'Prints the current document or message.',
    'Save':'Saves the current document or message.',
    'SpellCheck':'Starts spell checking the current document.',
    'MailForward':'Opens the user interface to forward a message.',
    'MailReply':'Opens the user interface to reply to a message.',
    'MailSend':'Sends the current message.',
    'LaunchCalculator':'The Calculator key, often labeled with an icon such as . This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP2).',
    'LaunchCalendar':'The Calendar key, often labeled with an icon like .',
    'LaunchContacts':'The Contacts key.',
    'LaunchMail':'The Mail key. This is often displayed as .',
    'LaunchMediaPlayer':'The Media Player key.',
    'LaunchMusicPlayer':'The Music Player key, often labeled with an icon such as .',
    'LaunchMyComputer':'The My Computer key on Windows keyboards. This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP1).',
    'LaunchPhone':'The Phone key, to open the phone dialer application if one is present.',
    'LaunchScreenSaver':'The Screen Saver key.',
    'LaunchSpreadsheet':'The Spreadsheet key. This key may be labeled with an icon such as  or that of a specific spreadsheet application.',
    'LaunchWebBrowser':'The Web Browser key. This key is frequently labeled with an icon such as  or the icon of a specific browser, depending on the device manufacturer.',
    'LaunchWebCam':'The WebCam key. Opens the webcam application.',
    'LaunchWordProcessor':'The Word Processor key. This may be an icon of a specific word processor application, or a generic document icon.',
    'LaunchApplication1':'The first generic application launcher button.',
    'LaunchApplication2':'The second generic application launcher button.',
    'LaunchApplication3':'The third generic application launcher button.',
    'LaunchApplication4':'The fourth generic application launcher button.',
    'LaunchApplication5':'The fifth generic application launcher button.',
    'LaunchApplication6':'The sixth generic application launcher button.',
    'LaunchApplication7':'The seventh generic application launcher button.',
    'LaunchApplication8':'The eighth generic application launcher button.',
    'LaunchApplication9':'The ninth generic application launcher button.',
    'LaunchApplication10':'The 10th generic application launcher button.',
    'LaunchApplication11':'The 11th generic application launcher button.',
    'LaunchApplication12':'The 12th generic application launcher button.',
    'LaunchApplication13':'The 13th generic application launcher button.',
    'LaunchApplication14':'The 14th generic application launcher button.',
    'LaunchApplication15':'The 15th generic application launcher button.',
    'LaunchApplication16':'The 16th generic application launcher button.',
    'BrowserBack':'Navigates to the previous content or page in the current Web view\'s history.',
    'BrowserFavorites':'Opens the user\'s list of bookmarks/favorites.',
    'BrowserForward':'Navigates to the next content or page in the current Web view\'s history.',
    'BrowserHome':'Navigates to the user\'s preferred home page.',
    'BrowserRefresh':'Refreshes the current page or contentl.',
    'BrowserSearch':'Activates the user\'s preferred search engine or the search interface within their browser.',
    'BrowserStop':'Stops loading the currently displayed Web view or content.',
    'Decimal':'The decimal point key (typically . or , depending on the region). In newer browsers, this value will simply be the character generated by the decimal key (one of those two characters).',
    'Key11':'The 11 key found on certain media numeric keypads.',
    'Key12':'The 12 key found on certain media numeric keypads.',
    'Multiply':'The numeric keypad\'s multiplication key, *.',
    'Add':'The numeric keypad\'s addition key, +.',
    'Clear':'The numeric keypad\'s Clear key.',
    'Divide':'The numeric keypad\'s division key, /.',
    'Subtract':'The numeric keypad\'s subtraction key, -.',
    'Separator':'The numeric keypad\'s places separator character (in the United States, this is a comma, but elsewhere it is frequently a period).'
};

document.onclick = function() {
    show_keys = !show_keys;
    document.querySelector('#mode').innerHTML = show_keys ? 'KeyboardEvent.key (Click to change mode)' : 'KeyboardEvent.code (Click to change mode)';
    document.title = show_keys ? 'KeyboardEvent.key' : 'KeyboardEvent.code';
}

document.onkeydown = function(e) {
    if ( !e.metaKey ) {
        e.preventDefault();
    }

    if(show_keys){
        document.querySelector('#location').innerHTML = locations[e.location];
        document.querySelector('#key > span').innerHTML = e.key;
        document.querySelector('#description').innerHTML = keys[e.key] || 'What key was that?!';
    }else{
        document.querySelector('#location').innerHTML = '';
        document.querySelector('#key > span').innerHTML = e.code;
        document.querySelector('#description').innerHTML = '';
    }
};