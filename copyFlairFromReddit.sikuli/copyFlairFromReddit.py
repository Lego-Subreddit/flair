setShowActions(True)
Settings.MinSimilarity = 0.9
Settings.MoveMouseDelay = 0.5

activeRegion = Region(1282,95,972,1339)

while True:

    App.focus('Google Chrome')

    type(Key.LEFT, KeyModifier.META)
    type(Key.RIGHT, KeyModifier.META + KeyModifier.SHIFT)
    type('c', KeyModifier.META)

    App.focus('Sublime Text')

    type('v', KeyModifier.META)
    type(Key.ENTER)

    App.focus('Google Chrome')

    type(Key.TAB * 6)