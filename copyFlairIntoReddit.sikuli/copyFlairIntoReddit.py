setShowActions(False)
Settings.MinSimilarity = 0.9
Settings.MoveMouseDelay = 0.0

activeRegion = Region(1279,92,911,1304)

while True:

    App.focus('Sublime Text')

    # Go to column 1
    type(Key.LEFT, KeyModifier.META)

    # Select the line and cut it, then remove newline.

    type(Key.RIGHT, KeyModifier.META + KeyModifier.SHIFT)
    type('c', KeyModifier.META)
    type(Key.RIGHT*2)

    App.focus('Google Chrome')

    type(Key.DOWN)

    wait(0.1)

    newFlairLine = activeRegion.find("1395792230297.png");
    click(newFlairLine)
    type('v', Key.META)
    #type(' Fan')

    wait(0.1)

    saveButton = activeRegion.find("1395792256487.png")

    saveButton.click()

    wait(0.1)