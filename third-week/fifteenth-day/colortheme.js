export function outsideOutCollors(colorThemeSet) {
  const { colors } = colorThemeSet;
  console.log(Object.keys(colors));
  console.log(Object.values(colors));
  const colorSet = new Set(
    Object.values(colors).map(item => {
      const strItem = String(item);
      if (strItem.length === 9) return strItem.substr(0, 7);
      if (strItem.length === 7) return strItem.substr(0, 7);
      if (strItem.length === 5) return strItem.substr(0, 4);
      if (strItem.length === 4) return strItem.substr(0, 4);
      // replace(/#[A-Fa-f0-9]{8}/, '***BobMyUncle***');
    }),
  );
  console.log(colorSet);
  // const colorHexRegx =  //
  console.log('size:', colorSet.size);
}

var colorTheme = {
  $schema: 'vscode://schemas/color-theme',
  type: 'dark',
  colors: {
    'activityBar.activeBackground': '#77116688',
    'activityBar.activeBorder': '#771166',
    'activityBar.activeFocusBorder': '#88bb33',
    'activityBar.background': '#1c1c30',
    'activityBar.border': '#ffcc6655',
    'activityBar.dropBorder': '#3399cc',
    'activityBar.foreground': '#c4bdb5ee',
    'activityBar.inactiveForeground': '#c4bdb5aa',
    'activityBarBadge.background': '#3399cccc',
    'activityBarBadge.foreground': '#ffcc66cc',
    'badge.background': '#3399cccc',
    'badge.foreground': '#ffcc66cc',
    'breadcrumb.activeSelectionForeground': '#c9bdb0dd',
    'breadcrumb.background': '#1d2547',
    'breadcrumb.focusForeground': '#d2c8bedd',
    'breadcrumb.foreground': '#d2c8beaa',
    'breadcrumbPicker.background': '#2a255add',
    'button.background': '#771166cc',
    'button.foreground': '#c9bdb0ee',
    'button.hoverBackground': '#3399cccc',
    contrastActiveBorder: '#ff115500',
    contrastBorder: '#d2c8be44',
    'debugExceptionWidget.background': '#1d2555ee',
    'debugExceptionWidget.border': '#d2c8be33',
    'debugToolBar.background': '#2c203c',
    'debugToolBar.border': '#5522aa55',
    descriptionForeground: '#c9bdb0ee',
    'diffEditor.border': '#77116600',
    'diffEditor.insertedTextBackground': '#88ddaa33',
    'diffEditor.insertedTextBorder': '#77116600',
    'diffEditor.removedTextBackground': '#ee447733',
    'diffEditor.removedTextBorder': '#77116600',
    'dropdown.background': '#1c1e2a',
    'dropdown.border': '#771166aa',
    'dropdown.foreground': '#d2c8bedd',
    'dropdown.listBackground': '#19152f',
    'editor.background': '#20213b',
    'editor.findMatchBackground': '#3399cc66',
    'editor.findMatchBorder': '#3333ffaa',
    'editor.findMatchHighlightBackground': '#3399cc44',
    'editor.findMatchHighlightBorder': '#3399ccaa',
    'editor.findRangeHighlightBackground': '#22335555',
    'editor.findRangeHighlightBorder': '#5522aa55',
    'editor.focusedStackFrameHighlightBackground': '#22335555',
    'editor.foldBackground': '#1155ee22',
    'editor.foreground': '#d2c8bedd',
    'editor.hoverHighlightBackground': '#3399cc33',
    'editor.inactiveSelectionBackground': '#3388dd77',
    'editor.lineHighlightBackground': '#1155ee22',
    'editor.lineHighlightBorder': '#ee111122',
    'editor.rangeHighlightBackground': '#22335555',
    'editor.rangeHighlightBorder': '#77116611',
    'editor.selectionBackground': '#4422ee77',
    'editor.selectionForeground': '#c9bdb0dd',
    'editor.selectionHighlightBackground': '#55227766',
    'editor.selectionHighlightBorder': '#5522aadd',
    'editor.snippetFinalTabstopHighlightBackground': '#22335599',
    'editor.snippetFinalTabstopHighlightBorder': '#223355aa',
    'editor.snippetTabstopHighlightBackground': '#22335577',
    'editor.snippetTabstopHighlightBorder': '#223355cc',
    'editor.stackFrameHighlightBackground': '#22335555',
    'editor.symbolHighlightBackground': '#4422ee77',
    'editor.symbolHighlightBorder': '#993366',
    'editor.wordHighlightBackground': '#88ddaa33',
    'editor.wordHighlightBorder': '#88ddaabb',
    'editor.wordHighlightStrongBackground': '#ee447733',
    'editor.wordHighlightStrongBorder': '#ee4477bb',
    'editorBracketMatch.background': '#aaee4444',
    'editorBracketMatch.border': '#aaee44bb',
    'editorCodeLens.foreground': '#d2c8be33',
    'editorCursor.background': '#22991155',
    'editorCursor.foreground': '#ff3333',
    'editorError.border': '#ff115544',
    'editorError.foreground': '#ff3366',
    'editorGroup.border': '#ffcc6655',
    'editorGroup.dropBackground': '#2c203c',
    'editorGroup.emptyBackground': '#1c1c2e',
    'editorGroup.focusedEmptyBorder': '#1c1c2e',
    'editorGroupHeader.border': '#001133',
    'editorGroupHeader.noTabsBackground': '#1c1c2e',
    'editorGroupHeader.tabsBackground': '#1c1c2e',
    'editorGroupHeader.tabsBorder': '#1d2545',
    'editorGutter.addedBackground': '#88bb33',
    'editorGutter.background': '#1d1c2f',
    'editorGutter.commentRangeForeground': '#5533eeaa',
    'editorGutter.deletedBackground': '#bb3355',
    'editorGutter.foldingControlForeground': '#ffcc77cc',
    'editorGutter.modifiedBackground': '#3399cc',
    'editorHint.border': '#ffcc6644',
    'editorHint.foreground': '#ffcc55ee',
    'editorHoverWidget.background': '#1d2555ee',
    'editorHoverWidget.border': '#d2c8be55',
    'editorHoverWidget.foreground': '#c9bdb0dd',
    'editorHoverWidget.statusBarBackground': '#1c1c2e',
    'editorIndentGuide.activeBackground': '#44aaee33',
    'editorIndentGuide.background': '#44aaee11',
    'editorInfo.border': '#44aaee55',
    'editorInfo.foreground': '#c9bdb0dd',
    'editorLightBulb.foreground': '#ffcc33dd',
    'editorLightBulbAutoFix.foreground': '#3399ccdd',
    'editorLineNumber.activeForeground': '#d2c8bedd',
    'editorLineNumber.foreground': '#d2c8be55',
    'editorLink.activeForeground': '#d2c8bedd',
    'editorMarkerNavigation.background': '#223355',
    'editorMarkerNavigationError.background': '#bb3355bb',
    'editorMarkerNavigationInfo.background': '#ffcc55ee',
    'editorMarkerNavigationWarning.background': '#d8cdb4bb',
    'editorOverviewRuler.addedForeground': '#88bb33aa',
    'editorOverviewRuler.border': '#3399cccc',
    'editorOverviewRuler.bracketMatchForeground': '#aaee44',
    'editorOverviewRuler.commonContentForeground': '#88ddaaaa',
    'editorOverviewRuler.currentContentForeground': '#3399ccaa',
    'editorOverviewRuler.deletedForeground': '#bb3355aa',
    'editorOverviewRuler.errorForeground': '#ff3366',
    'editorOverviewRuler.findMatchForeground': '#3399cc',
    'editorOverviewRuler.incomingContentForeground': '#dd2255ee',
    'editorOverviewRuler.infoForeground': '#ffcc55ee',
    'editorOverviewRuler.modifiedForeground': '#3399ccaa',
    'editorOverviewRuler.rangeHighlightForeground': '#ff7733cc',
    'editorOverviewRuler.selectionHighlightForeground': '#ffcc55ee',
    'editorOverviewRuler.warningForeground': '#ccff33',
    'editorOverviewRuler.wordHighlightForeground': '#88ddaa',
    'editorOverviewRuler.wordHighlightStrongForeground': '#ee4477',
    'editorPane.background': '#1c1c2e',
    'editorRuler.foreground': '#ee447744',
    'editorSuggestWidget.background': '#223355dd',
    'editorSuggestWidget.border': '#66bbffdd',
    'editorSuggestWidget.foreground': '#c4bdb5dd',
    'editorSuggestWidget.highlightForeground': '#66bbffdd',
    'editorSuggestWidget.selectedBackground': '#44aaee44',
    'editorUnnecessaryCode.border': '#9955bb44',
    'editorUnnecessaryCode.opacity': '#ffffff66',
    'editorWarning.border': '#eeaa2200',
    'editorWarning.foreground': '#ccff33',
    'editorWhitespace.foreground': '#d2c8be22',
    'editorWidget.background': '#1d2555ee',
    'editorWidget.border': '#d2c8be55',
    'editorWidget.foreground': '#c9bdb0dd',
    'editorWidget.resizeBorder': '#3399ccee',
    errorForeground: '#d2c8bebb',
    'errorLens.errorBackground': '#ff336633',
    'errorLens.errorForeground': '#ff3366',
    'errorLens.errorMessageBackground': '#ff336666',
    'errorLens.hintBackground': '#3399cc33',
    'errorLens.hintForeground': '#3399cc',
    'errorLens.hintMessageBackground': '#3399cc66',
    'errorLens.infoBackground': '#ffbb0033',
    'errorLens.infoForeground': '#ffbb00',
    'errorLens.infoMessageBackground': '#ffbb0066',
    'errorLens.warningBackground': '#ccff3333',
    'errorLens.warningForeground': '#ccff33',
    'errorLens.warningMessageBackground': '#ccff3366',
    'extensionBadge.remoteBackground': '#771166cc',
    'extensionBadge.remoteForeground': '#c9bdb0ee',
    'extensionButton.prominentBackground': '#3399cc',
    'extensionButton.prominentForeground': '#ffeeccee',
    'extensionButton.prominentHoverBackground': '#771166cc',
    focusBorder: '#771166aa',
    foreground: '#d2c8bedd',
    'gitDecoration.addedResourceForeground': '#33cc00dd',
    'gitDecoration.conflictingResourceForeground': '#ff2200dd',
    'gitDecoration.deletedResourceForeground': '#993366',
    'gitDecoration.ignoredResourceForeground': '#0099ccdd',
    'gitDecoration.modifiedResourceForeground': '#ffbb00dd',
    'gitDecoration.submoduleResourceForeground': '#cc33ccdd',
    'gitDecoration.untrackedResourceForeground': '#ff9900dd',
    'icon.foreground': '#ffcc77cc',
    'imagePreview.border': '#c4bdb5',
    'input.background': '#3399cc33',
    'input.border': '#eeaa2288',
    'input.foreground': '#ffeedddd',
    'input.placeholderForeground': '#ffeedd88',
    'inputOption.activeBackground': '#77116688',
    'inputOption.activeBorder': '#eeaa22bb',
    'inputOption.activeForeground': '#c4bdb5',
    'inputValidation.errorBackground': '#77222233',
    'inputValidation.errorBorder': '#bb3355',
    'inputValidation.errorForeground': '#c9bdb0dd',
    'inputValidation.infoBackground': '#22335533',
    'inputValidation.infoBorder': '#ffcc55ee',
    'inputValidation.infoForeground': '#c9bdb0dd',
    'inputValidation.warningBackground': '#77552233',
    'inputValidation.warningBorder': '#ffcc55ee',
    'inputValidation.warningForeground': '#c9bdb0dd',
    'list.activeSelectionBackground': '#3399cc77',
    'list.dropBackground': '#3399cc33',
    'list.errorForeground': '#ff3366',
    'list.filterMatchBackground': '#3399ccaa',
    'list.filterMatchBorder': '#ffcc33',
    'list.focusBackground': '#2222ee77',
    'list.focusForeground': '#ffffff',
    'list.highlightForeground': '#77bb55',
    'list.hoverBackground': '#77116677',
    'list.hoverForeground': '#d2c8bedd',
    'list.inactiveFocusBackground': '#2222ee66',
    'list.inactiveSelectionBackground': '#3333dd77',
    'list.inactiveSelectionForeground': '#d2c8bedd',
    'list.invalidItemForeground': '#ff4422cc',
    'list.warningForeground': '#ccff33',
    'listFilterWidget.background': '#442266dd',
    'listFilterWidget.noMatchesOutline': '#442266dd',
    'listFilterWidget.outline': '#442266dd',
    'menu.background': '#2c203c',
    'menu.border': '#77116611',
    'menu.foreground': '#d2c8bedd',
    'menu.selectionBackground': '#eebb5555',
    'menu.selectionBorder': '#5522aadd',
    'menu.selectionForeground': '#c9bdb0dd',
    'menu.separatorBackground': '#2c203c',
    'menubar.selectionBackground': '#22995555',
    'menubar.selectionBorder': '#66118866',
    'menubar.selectionForeground': '#c9bdb0dd',
    'merge.border': '#3399cccc',
    'merge.commonContentBackground': '#88ddaa33',
    'merge.commonHeaderBackground': '#88ddaaaa',
    'merge.currentContentBackground': '#3399cc33',
    'merge.currentHeaderBackground': '#3399ccaa',
    'merge.incomingContentBackground': '#ee447733',
    'merge.incomingHeaderBackground': '#dd2255ee',
    'minimap.background': '#1d1c2f',
    'minimap.errorHighlight': '#ff3366',
    'minimap.findMatchHighlight': '#ff773388',
    'minimap.selectionHighlight': '#88ddaa88',
    'minimap.warningHighlight': '#ccff33',
    'minimapGutter.addedBackground': '#88bb33cc',
    'minimapGutter.deletedBackground': '#bb3355cc',
    'minimapGutter.modifiedBackground': '#3399cccc',
    'minimapSlider.activeBackground': '#3399cccc',
    'minimapSlider.background': '#5522aa44',
    'minimapSlider.hoverBackground': '#5522aa88',
    'notificationCenter.border': '#77116611',
    'notificationCenterHeader.background': '#2c203c',
    'notificationCenterHeader.foreground': '#d2c8bedd',
    'notificationLink.foreground': '#6699ffdd',
    'notificationToast.border': '#77116611',
    'notifications.background': '#1d1028',
    'notifications.border': '#77116611',
    'notifications.foreground': '#c9bdb0dd',
    'notificationsErrorIcon.foreground': '#ff3366',
    'notificationsInfoIcon.foreground': '#ffcc55',
    'notificationsWarningIcon.foreground': '#ccff33',
    'panel.background': '#201039',
    'panel.border': '#d2c8be55',
    'panelInput.border': '#77116655',
    'panelTitle.activeBorder': '#3399cccc',
    'panelTitle.activeForeground': '#d2c8bedd',
    'panelTitle.inactiveForeground': '#d2c8beaa',
    'peekView.border': '#ffcc55ee',
    'peekViewEditor.background': '#223355bb',
    'peekViewEditor.matchHighlightBackground': '#552266',
    'peekViewEditor.matchHighlightBorder': '#661188',
    'peekViewEditorGutter.background': '#1d2545',
    'peekViewResult.background': '#5522aa22',
    'peekViewResult.fileForeground': '#c4bdb5dd',
    'peekViewResult.lineForeground': '#c4bdb5dd',
    'peekViewResult.matchHighlightBackground': '#3399cc55',
    'peekViewResult.selectionBackground': '#4422bb44',
    'peekViewResult.selectionForeground': '#c4bdb5dd',
    'peekViewTitle.background': '#1144bb55',
    'peekViewTitleDescription.foreground': '#c4bdb5dd',
    'peekViewTitleLabel.foreground': '#c4bdb5dd',
    'pickerGroup.border': '#77116611',
    'pickerGroup.foreground': '#d2c8bebb',
    'problemsErrorIcon.foreground': '#ff3366',
    'problemsInfoIcon.foreground': '#ffcc55ee',
    'problemsWarningIcon.foreground': '#ccff33',
    'progressBar.background': '#3399cccc',
    'quickInput.foreground': '#c4bdb5dd',
    'scrollbar.shadow': '#111122',
    'scrollbarSlider.activeBackground': '#88bb33cc',
    'scrollbarSlider.background': '#3399cc99',
    'scrollbarSlider.hoverBackground': '#ffcc66cc',
    'searchEditor.findMatchBackground': '#99336655',
    'searchEditor.findMatchBorder': '#cc33ccaa',
    'selection.background': '#669988aa',
    'settings.checkboxBackground': '#3399cc44',
    'settings.checkboxBorder': '#ffcc6677',
    'settings.checkboxForeground': '#d2c8bedd',
    'settings.dropdownBackground': '#77116644',
    'settings.dropdownBorder': '#ffcc6677',
    'settings.dropdownForeground': '#d2c8bedd',
    'settings.dropdownListBorder': '#ffcc66bb',
    'settings.headerForeground': '#eeddcc',
    'settings.modifiedItemIndicator': '#88bb33',
    'settings.numberInputBackground': '#3399cc44',
    'settings.numberInputBorder': '#ffcc6644',
    'settings.numberInputForeground': '#d2c8bedd',
    'settings.textInputBackground': '#77116644',
    'settings.textInputBorder': '#ffcc6644',
    'settings.textInputForeground': '#d2c8bedd',
    'sideBar.background': '#1d1028',
    'sideBar.border': '#ffcc3377',
    'sideBar.dropBackground': '#77449933',
    'sideBar.foreground': '#d2c8bedd',
    'sideBarSectionHeader.background': '#77116666',
    'sideBarSectionHeader.border': '#ffbbaa55',
    'sideBarSectionHeader.foreground': '#d2c8bedd',
    'sideBarTitle.foreground': '#d2c8bedd',
    'statusBar.background': '#1d2547',
    'statusBar.border': '#77116600',
    'statusBar.debuggingBackground': '#cc6600',
    'statusBar.debuggingBorder': '#77116600',
    'statusBar.debuggingForeground': '#d2c8bedd',
    'statusBar.foreground': '#d2c8beaa',
    'statusBar.noFolderBackground': '#884488',
    'statusBar.noFolderBorder': '#77116600',
    'statusBar.noFolderForeground': '#d2c8bedd',
    'statusBarItem.activeBackground': '#1c1c2e',
    'statusBarItem.hoverBackground': '#1c1c2e',
    'statusBarItem.prominentBackground': '#669944',
    'statusBarItem.prominentForeground': '#d2c8bedd',
    'statusBarItem.prominentHoverBackground': '#1c1c2e',
    'symbolIcon.arrayForeground': '#77cc22',
    'symbolIcon.booleanForeground': '#77cc22',
    'symbolIcon.classForeground': '#dd8811',
    'symbolIcon.colorForeground': '#c4bdb5dd',
    'symbolIcon.constantForeground': '#297dc4',
    'symbolIcon.constructorForeground': '#ee11aaee',
    'symbolIcon.enumeratorForeground': '#ffbb22',
    'symbolIcon.enumeratorMemberForeground': '#66bbffdd',
    'symbolIcon.eventForeground': '#ffcc33ee',
    'symbolIcon.fieldForeground': '#3399ccdd',
    'symbolIcon.fileForeground': '#c4bdb5dd',
    'symbolIcon.folderForeground': '#c4bdb5dd',
    'symbolIcon.functionForeground': '#ffcc33ee',
    'symbolIcon.interfaceForeground': '#297dc4',
    'symbolIcon.keyForeground': '#c4bdb5dd',
    'symbolIcon.keywordForeground': '#dd2255',
    'symbolIcon.methodForeground': '#aa55bbee',
    'symbolIcon.moduleForeground': '#aa55bbee',
    'symbolIcon.namespaceForeground': '#c4bdb5dd',
    'symbolIcon.nullForeground': '#aa55bb',
    'symbolIcon.numberForeground': '#ee6677',
    'symbolIcon.objectForeground': '#77cc22',
    'symbolIcon.operatorForeground': '#66bbffdd',
    'symbolIcon.packageForeground': '#ff9900',
    'symbolIcon.propertyForeground': '#3399cc',
    'symbolIcon.referenceForeground': '#00539c',
    'symbolIcon.snippetForeground': '#652d90',
    'symbolIcon.stringForeground': '#ccee55',
    'symbolIcon.structForeground': '#66bbffdd',
    'symbolIcon.textForeground': '#ffcc33',
    'symbolIcon.typeParameterForeground': '#c4bdb5dd',
    'symbolIcon.unitForeground': '#44bb99',
    'symbolIcon.variableForeground': '#66bbff',
    'tab.activeBackground': '#1d2545',
    'tab.activeBorder': '#1d254500',
    'tab.activeBorderTop': '#ccff33',
    'tab.activeForeground': '#d2c8bedd',
    'tab.activeModifiedBorder': '#ff3366',
    'tab.border': '#1c1c2e',
    'tab.hoverBackground': '#5522aa55',
    'tab.hoverBorder': '#3399cc',
    'tab.hoverForeground': '#d2c8be',
    'tab.inactiveBackground': '#2a2040',
    'tab.inactiveForeground': '#d2c8beaa',
    'tab.inactiveModifiedBorder': '#ff445599',
    'tab.unfocusedActiveBackground': '#1d2545',
    'tab.unfocusedActiveBorder': '#1d254500',
    'tab.unfocusedActiveBorderTop': '#aaee4499',
    'tab.unfocusedActiveForeground': '#d2c8bedd',
    'tab.unfocusedActiveModifiedBorder': '#ff445599',
    'tab.unfocusedHoverBackground': '#5522aa44',
    'tab.unfocusedHoverBorder': '#3399ccdd',
    'tab.unfocusedHoverForeground': '#d2c8be',
    'tab.unfocusedInactiveBackground': '#2a2040',
    'tab.unfocusedInactiveForeground': '#d2c8beaa',
    'tab.unfocusedInactiveModifiedBorder': '#ff445555',
    'terminal.ansiBlack': '#201020',
    'terminal.ansiBlue': '#458588',
    'terminal.ansiBrightBlack': '#928374',
    'terminal.ansiBrightBlue': '#99c6ca',
    'terminal.ansiBrightCyan': '#8ae180',
    'terminal.ansiBrightGreen': '#b5c033',
    'terminal.ansiBrightMagenta': '#d66282',
    'terminal.ansiBrightRed': '#f42c3e',
    'terminal.ansiBrightWhite': '#ddccaa',
    'terminal.ansiBrightYellow': '#fabe2f',
    'terminal.ansiCyan': '#689e6a',
    'terminal.ansiGreen': '#98971a',
    'terminal.ansiMagenta': '#b16286',
    'terminal.ansiRed': '#cc241d',
    'terminal.ansiWhite': '#c0b0a0',
    'terminal.ansiYellow': '#e7a931',
    'terminal.background': '#202010',
    'terminal.border': '#77116655',
    'terminal.foreground': '#c4bdb5dd',
    'terminal.selectionBackground': '#33227777',
    'terminalCursor.background': '#29153a',
    'terminalCursor.foreground': '#ff3333',
    'textBlockQuote.background': '#2c203c',
    'textBlockQuote.border': '#77116611',
    'textCodeBlock.background': '#2c203c',
    'textLink.activeForeground': '#6644ccdd',
    'textLink.foreground': '#6699ffdd',
    'textPreformat.foreground': '#d2c8bedd',
    'textSeparator.foreground': '#d2c8bedd',
    'titleBar.activeBackground': '#1c1c2e',
    'titleBar.activeForeground': '#d2c8bedd',
    'titleBar.border': '#1c1c2e',
    'titleBar.inactiveBackground': '#1c1c2e',
    'titleBar.inactiveForeground': '#d2c8beaa',
    'walkThrough.embeddedEditorBackground': '#2c203c',
    'welcomePage.background': '#1d1028',
    'welcomePage.buttonBackground': '#771166cc',
    'welcomePage.buttonHoverBackground': '#3399cccc',
    'widget.shadow': '#001111',
    'window.activeBorder': '#771166aa',
    'window.inactiveBorder': '#1b1b26',
    //"button.secondaryBackground": "#3a3d41",
    //"button.secondaryForeground": "#ffffff",
    //"button.secondaryHoverBackground": "#45494e",
    //"checkbox.background": "#1c1e2a",
    //"checkbox.border": "#771166aa",
    //"checkbox.foreground": "#d2c8bedd",
    //"debugConsole.errorForeground": "#d2c8bebb",
    //"debugConsole.infoForeground": "#c9bdb0dd",
    //"debugConsole.sourceForeground": "#d2c8bedd",
    //"debugConsole.warningForeground": "#ccff33",
    //"debugConsoleInputIcon.foreground": "#d2c8bedd",
    //"debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
    //"debugIcon.breakpointDisabledForeground": "#848484",
    //"debugIcon.breakpointForeground": "#e51400",
    //"debugIcon.breakpointStackframeForeground": "#89d185",
    //"debugIcon.breakpointUnverifiedForeground": "#848484",
    //"debugIcon.continueForeground": "#75beff",
    //"debugIcon.disconnectForeground": "#f48771",
    //"debugIcon.pauseForeground": "#75beff",
    //"debugIcon.restartForeground": "#89d185",
    //"debugIcon.startForeground": "#89d185",
    //"debugIcon.stepBackForeground": "#75beff",
    //"debugIcon.stepIntoForeground": "#75beff",
    //"debugIcon.stepOutForeground": "#75beff",
    //"debugIcon.stepOverForeground": "#75beff",
    //"debugIcon.stopForeground": "#f48771",
    //"debugTokenExpression.boolean": "#4e94ce",
    //"debugTokenExpression.error": "#f48771",
    //"debugTokenExpression.name": "#c586c0",
    //"debugTokenExpression.number": "#b5cea8",
    //"debugTokenExpression.string": "#ce9178",
    //"debugTokenExpression.value": "#cccccc99",
    //"debugView.exceptionLabelBackground": "#6c2022",
    //"debugView.exceptionLabelForeground": "#d2c8bedd",
    //"debugView.stateLabelBackground": "#88888844",
    //"debugView.stateLabelForeground": "#d2c8bedd",
    //"debugView.valueChangedHighlight": "#569cd6",
    //"diffEditor.diagonalFill": "#cccccc33",
    //"editor.onTypeRenameBackground": "#ff00004d",
    //"editorActiveLineNumber.foreground": "#c6c6c6",
    //"errorLens.errorBackgroundLight": "#e4545420",
    //"errorLens.errorForegroundLight": "#e45454",
    //"errorLens.hintBackgroundLight": "#17a2a220",
    //"errorLens.hintForegroundLight": "#2faf64",
    //"errorLens.infoBackgroundLight": "#00b7e420",
    //"errorLens.infoForegroundLight": "#00b7e4",
    //"errorLens.warningBackgroundLight": "#ff942f20",
    //"errorLens.warningForegroundLight": "#ff942f",
    //"gitlens.gutterBackgroundColor": "#ffffff13",
    //"gitlens.gutterForegroundColor": "#bebebe",
    //"gitlens.gutterUncommittedForegroundColor": "#00bcf299",
    //"gitlens.lineHighlightBackgroundColor": "#00bcf233",
    //"gitlens.lineHighlightOverviewRulerColor": "#00bcf299",
    //"gitlens.trailingLineBackgroundColor": "#00000000",
    //"gitlens.trailingLineForegroundColor": "#99999959",
    //"lintlens.annotationColor": "#99999950",
    //"list.activeSelectionForeground": "#ffffff",
    //"list.deemphasizedForeground": "#8c8c8c",
    //"notebook.cellBorderColor": "#d2c8be22",
    //"notebook.cellHoverBackground": "#d2c8be11",
    //"notebook.cellInsertionIndicator": "#771166aa",
    //"notebook.cellStatusBarItemHoverBackground": "#ffffff26",
    //"notebook.cellToolbarSeparator": "#80808059",
    //"notebook.focusedCellBackground": "#d2c8be22",
    //"notebook.focusedCellBorder": "#ffffff1f",
    //"notebook.focusedEditorBorder": "#771166aa",
    //"notebook.outputContainerBackgroundColor": "#d2c8be22",
    //"notebook.symbolHighlightBackground": "#ffffff0b",
    //"notebookScrollbarSlider.activeBackground": "#88bb33cc",
    //"notebookScrollbarSlider.background": "#3399cc99",
    //"notebookScrollbarSlider.hoverBackground": "#ffcc66cc",
    //"notebookStatusErrorIcon.foreground": "#d2c8bebb",
    //"notebookStatusRunningIcon.foreground": "#d2c8bedd",
    //"notebookStatusSuccessIcon.foreground": "#89d185",
    //"panel.dropBorder": "#d2c8bedd",
    //"panelSection.border": "#d2c8be55",
    //"panelSection.dropBackground": "#2c203c",
    //"panelSectionHeader.background": "#80808033",
    //"panelSectionHeader.border": "#d2c8be44",
    //"quickInput.background": "#1d2555ee",
    //"quickInputTitle.background": "#ffffff1b",
    //"scm.providerBorder": "#454545",
    //"searchEditor.textInputBorder": "#eeaa2288",
    //"statusBarItem.remoteBackground": "#3399cccc",
    //"statusBarItem.remoteForeground": "#ffcc66cc",
    //"tree.indentGuidesStroke": "#585858"
  },
  tokenColors: [
    {
      scope: [
        'source.ts storage.type.enum',
        'source.ts storage.type.interface',
        'source.ts storage.type.type',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts meta.interface meta.definition.property variable.object.property',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts meta.interface meta.type.annotation support.type.primitive',
        'source.ts meta.type.declaration support.type.primitive',
        'source.ts meta.interface meta.type.annotation entity.name.type',
        'source.ts meta.type.declaration entity.name.type',
        'source.ts meta.type.declaration meta.type.function.return meta.type.parameters entity.name.type',
        'source.ts meta.function meta.block meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55EE',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts meta.type.declaration meta.type.parameters entity.name.type',
        'source.ts meta.function meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts entity.name.type',
        'source.ts meta.parameters entity.name.type',
        'source.ts meta.type.annotation meta.type.parameters entity.name.type',
        'source.ts meta.type.annotation',
        'source.ts meta.type.parameters entity.name.type',
        'source.ts type.annotation',
        'source.ts meta.type.annotation meta.type.parameters support.type.primitive',
        'source.ts support.type.primitive',
      ],
      settings: {
        foreground: '#FFCC55EE',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts entity.name.function',
        'source.ts meta.definition.function.ts entity.name.function',
        'source.ts meta.definition.method',
        'source.ts meta.definition.variable entity.name.function',
        'source.ts meta.field.declaration.ts',
      ],
      settings: {
        foreground: '#FFCC55EE',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts support.function.builtin',
        'source.ts support.function.math',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts support.function.git-rebase',
        'source.ts support.function',
        'source.ts support.function.process',
        'source.ts support.function.dom',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts entity.other.inherited-class',
        'source.ts new.expr entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts meta.return.type entity.name.type',
        'source.ts meta.return.type support.type.primitive',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts meta.return.type meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55EE',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.ts meta.return.type meta.type.parameters support.type.primitive',
      ],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.ts meta.return.type meta.type.parameters punctuation.definition.typeparameters',
        'source.ts meta.return.type meta.type.tuple meta.brace.square',
        'source.ts meta.return.type keyword.operator.type',
      ],
      settings: {
        foreground: '#EEDDBBDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts *link*',
        'source.ts *uri*',
        'source.ts *url*',
        'source.ts case-clause.expr ',
        'source.ts case-clause.expr',
        'source.ts cast.expr',
        'source.ts header',
        'source.ts keyword.other.back-reference.regexp',
        'source.ts keyword.other.unit',
        'source.ts markup.changed',
        'source.ts markup.deleted',
        'source.ts markup.heading',
        'source.ts markup.inline.raw',
        'source.ts markup.inserted',
        'source.ts markup.punctuation.list.beginning',
        'source.ts markup.punctuation.quote.beginning',
        'source.ts markup.underline',
        'source.ts module.node',
        'source.ts new.expr',
        'source.ts prototype',
        'source.ts punctuation.definition.binding-pattern.array',
        'source.ts punctuation.definition.binding-pattern.object',
        'source.ts source.embedded',
        'source.ts switch-block.expr',
        'source.ts switch-expression.expr',
        'source.ts switch-statement.expr',
        'source.ts variable.other.object',
        'source.ts meta.object.member variable.other.object',
      ],
      settings: {
        foreground: '#EEDDBBDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts support.class',
        'source.ts support.class.builtin',
        'source.ts support.class.node',
        'source.ts support.class.promise',
        'source.ts support.constant',
        'source.ts support.constant',
        'source.ts support.constant.math',
        'source.ts support.type',
        'source.ts support.type.object.module',
        'source.ts support.variable',
        'source.ts support.variable.object.node',
        'source.ts support.variable.object.process',
      ],
      settings: {
        foreground: '#EEDDBBDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts punctuation.definition.template-expression.begin',
        'source.ts punctuation.definition.template-expression.end',
        'source.ts punctuation.definition.parameters.begin',
        'source.ts punctuation.definition.parameters.end',
        'source.ts meta.brace.angle',
        'source.ts meta.brace.round',
        'source.ts meta.brace.square',
        'source.ts punctuation.definition.block',
        'source.ts entity.function',
        'source.ts entity.name',
        'source.ts entity.other.attribute-name.css',
        'source.ts entity.other.attribute-name.directive',
        'source.ts entity.other.attribute-name',
        'source.ts entity.other.inherited-class',
        'source.ts entity.static',
      ],
      settings: {
        foreground: '#EEDDBBDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts meta.interface entity.name.type.interface',
        'entity.name.type.alias',
      ],
      settings: {
        foreground: '#C8C3B7CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts entity.name.type.class',
        'source.ts entity.name.type.enum',
        'source.ts entity.name.type.instance',
        'source.ts entity.name.type.module',
        'source.ts entity.name.type.interface',
        'source.ts entity.name.type.alias',
      ],
      settings: {
        foreground: '#C8C3B7CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts meta.decorator entity.name',
        'source.ts meta.decorator entity.name.function',
        'source.ts meta.decorator meta.function-call entity.name',
        'source.ts meta.decorator variable.other.readwrite',
      ],
      settings: {
        foreground: '#C8C3B7CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts emphasis',
        'source.ts markup.bold',
        'source.ts strong',
      ],
      settings: {
        foreground: '#C8C3B7CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.ts markup.italic'],
      settings: {
        foreground: '#C8C3B7CC',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.ts string.regexp constant.other.character-class.set.regexp',
      ],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.ts meta.var.expr string.regexp'],
      settings: {
        foreground: '#99CC88DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts string.regexp punctuation.definition.character-class.regexp',
      ],
      settings: {
        foreground: '#FFCC55EE',
        fontStyle: '',
      },
    },
    {
      scope: ['source support.function.console'],
      settings: {
        foreground: '#FFCC55EE',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source support.class.console'],
      settings: {
        foreground: '#44BB99DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source support.function.promise'],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts string.regexp punctuation.definition.string.begin',
        'source.ts string.regexp punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts variable.other.enummember',
        'source.ts variable.arguments',
        'source.ts variable.class',
        'source.ts variable.language.arguments',
        'source.ts variable.language',
        'source.ts variable.name',
        'source.ts variable.other.constant.object',
        'source.ts variable.other.constant',
        'source.ts variable.other.readwrite.alias',
        'source.ts meta.array-binding-pattern-variable variable.other.constant',
        'source.ts variable.other.readwrite',
        'source.ts variable.other.readwrite',
        'source.ts variable.other.regexp',
        'source.ts variable.other',
        'source.ts variable.parameter',
        'source.ts variable',
        'source.ts meta.array-binding-pattern-variable variable.other.constant',
        'source.ts meta.object-binding-pattern-variable variable.other.constant',
        'meta.body.struct',
        'source meta.body',
      ],
      settings: {
        foreground: '#AADDCCCC',
      },
    },
    {
      scope: [
        'source.ts meta.object-binding-pattern-variable variable.other.constant',
        'source.ts meta.object.member meta.object-literal.key',
        'source.ts meta.objectliteral meta.object.member',
        'source.ts meta.var.expr meta.object-literal.key',
        'source.ts variable.object.property',
        'source.ts variable.other.constant.object.property',
        'source.ts variable.other.constant.property',
        'source.ts variable.other.property',
      ],
      settings: {
        foreground: '#66BBFFBB',
      },
    },
    {
      scope: ['source.ts support.constant.property.math'],
      settings: {
        foreground: '#66BBFFBB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts support.variable.property',
        'source.ts support.variable.property.importmeta',
        'source.ts support.variable.property.process',
        'source.ts support.variable.property.target',
        'source.ts support.type.property-name',
        'source.ts support.type.property-name.css',
        'source.ts support.property-value',
        'source.ts support.property-value.scss',
      ],
      settings: {
        foreground: '#66BBFFBB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts constant',
        'source.ts constant.character.escape.backslash.regexp',
        'source.ts constant.character.numeric.regexp',
        'source.ts constant.language',
        'source.ts constant.language.import-export-all',
        'source.ts constant.other.character-class.range.regexp',
        'source.ts constant.other.character-class.regexp',
        'source.ts constant.other.character-class.set.regexp',
        'source.ts constant.rgb-value',
        'source.ts constant.sha.git-rebase',
        'source.ts constant.character.escape',
        'source.ts constant.numeric',
        'source.ts constant.numeric.binary',
        'source.ts constant.numeric.decimal',
        'source.ts constant.numeric.hex',
        'source.ts constant.numeric.octal',
      ],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts string',
        'source.ts string.constant.other.placeholder',
        'source.ts string.entity',
        'source.ts string.escape',
        'source.ts string.quoted.double',
        'source.ts string.quoted.single',
        'source.ts string.regexp',
        'source.ts string.tag',
        'source.ts string.template',
        'source.ts string.value',
      ],
      settings: {
        foreground: '#CCEE33CC',
      },
    },
    {
      scope: ['source.ts storage.type.function.arrow'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.ts storage.type.function'],
      settings: {
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts storage.type.function',
        'source.ts storage.type.function.arrow',
      ],
      settings: {
        foreground: '#77CC22CC',
      },
    },
    {
      scope: ['source.ts storage.type.class'],
      settings: {
        foreground: '#FFCC55EE',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts meta.method.declaration.ts storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts meta.class storage.modifier',
        'source.ts meta.method.declaration storage.modifier',
        'source.ts storage.type.property',
        'storage.type.modifier.access.control',
      ],
      settings: {
        foreground: '#FF9911EE',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts keyword.control.new',
        'source.ts keyword.operator.new',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts meta.method.declaration storage.modifier.async',
        'source.ts storage.modifier.async',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts variable.language.super'],
      settings: {
        foreground: '#EE11AACC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts variable.language.this'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts meta.import variable.other.readwrite.alias',
        'source.ts meta.import variable.other.readwrite',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source.ts meta.import punctuation.definition.block'],
      settings: {
        foreground: '#FFDD00CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts constant.language.import-export-all'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts meta.import string.quoted.single',
        'source.ts meta.import string.quoted.double',
      ],
      settings: {
        foreground: '#CCEE55CC',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.ts meta.import keyword.control.as',
        'source.ts meta.import keyword.control.default',
        'source.ts meta.import keyword.control.from',
        'source.ts meta.import keyword.control.import',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.ts storage.type.internaldeclaration',
        'source.ts storage.type.namespace',
        'source.ts storage.type',
        'source.ts keyword.control.from',
        'source.ts keyword.control.import',
        'source.ts keyword.control.export',
        'source.ts meta.export.default keyword.control.default',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts keyword.control.as',
        'source.ts keyword.control.default',
        'source.ts keyword.control',
        'source.ts keyword.control.anchor.regexp',
        'source.ts keyword.control.conditional',
        'source.ts keyword.control.less',
        'source.ts keyword.control.loop',
        'source.ts keyword.control.module',
        'source.ts keyword.control.require',
        'source.ts keyword.control.switch',
        'source.ts keyword.control.trycatch',
        'source.ts keyword.control.with',
        'source.ts keyword',
        'source.ts keyword.other',
        'source.ts keyword.generator.asterisk',
        'source.ts meta.block keyword.control.flow',
        'source.ts keyword.operator.logical',
        'source.ts storage.type.numeric.bigint',
      ],
      settings: {
        foreground: '#DD2255EE',
        fontStyle: '',
      },
    },
    {
      scope: ['source.ts storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts meta.block meta.var.expr storage.type'],
      settings: {
        foreground: '#DD2255EE',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source.ts punctuation.decorator'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.ts constant.language.boolean.false'],
      settings: {
        foreground: '#EE4433CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts constant.language.boolean.true'],
      settings: {
        foreground: '#77DD33CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts constant.language.undefined'],
      settings: {
        foreground: '#AA77BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts constant.language.null'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts support.type.builtin'],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts constant.language.infinity',
        'source.ts constant.language.nan',
      ],
      settings: {
        foreground: '#77AADDCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.ts storage.type.numeric.bigint'],
      settings: {
        foreground: '#DD2255EE',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.ts keyword.operator.arithmetic',
        'source.ts keyword.operator.assignment.compound.bitwise',
        'source.ts keyword.operator.assignment.compound',
        'source.ts keyword.operator.bitwise.shift',
        'source.ts keyword.operator.bitwise',
        'source.ts keyword.operator.decrement',
        'source.ts keyword.operator.increment',
        'source.ts keyword.operator.definiteassignment',
        'source.ts keyword.operator',
        'source.ts keyword.operator.comparison',
        'source.ts keyword.operator.ternary',
        'source.ts punctuation.separator.key-value',
        'source.ts keyword.operator.assignment',
        'source.ts keyword.operator.type.annotation',
        'source.ts keyword.operator.expression.delete',
        'source.ts keyword.operator.expression.import',
        'source.ts keyword.operator.expression.in',
        'source.ts keyword.operator.expression.infer',
        'source.ts keyword.operator.expression.instanceof',
        'source.ts keyword.operator.expression.is',
        'source.ts keyword.operator.expression.keyof',
        'source.ts keyword.operator.expression.of',
        'source.ts keyword.operator.expression.typeof',
        'source.ts keyword.operator.expression.void',
        'source.ts keyword.operator.negation.regexp',
        'source.ts keyword.operator.optional',
        'source.ts keyword.operator.or.regexp',
        'source.ts keyword.operator.quantifier.regexp',
        'source.ts keyword.operator.relational',
        'source.ts keyword.operator.type.modifier',
        'source.ts keyword.operator.type',
        'source punctuation.separator.scope-resolution',
        'source punctuation.separator.namespace.access',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.ts keyword.operator.spread',
        'source.ts keyword.operator.rest',
      ],
      settings: {
        foreground: '#44BB99AA',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.ts punctuation.quasi',
        'source.ts string.quasi',
        'source.ts invalid',
        'source.ts invalid.illegal',
        'source.ts invalid.illegal.newline',
      ],
      settings: {
        foreground: '#DD2255EE',
        fontStyle: '',
      },
    },
    {
      scope: ['source.ts invalid.deprecated'],
      settings: {
        foreground: '#DD2255EE',
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'source.tsx storage.type.enum',
        'source.tsx storage.type.interface',
        'source.tsx storage.type.type',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx meta.interface entity.name.type.interface',
        'entity.name.type.alias',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx meta.interface meta.definition.property variable.object.property',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx meta.interface meta.type.annotation support.type.primitive',
        'source.tsx meta.type.declaration support.type.primitive',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx meta.interface meta.type.annotation entity.name.type',
        'source.tsx meta.type.declaration entity.name.type',
        'source.tsx meta.type.declaration meta.type.function.return meta.type.parameters entity.name.type',
        'source.tsx meta.function meta.block meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx meta.type.declaration meta.type.parameters entity.name.type',
        'source.tsx meta.function meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx entity.name.type',
        'source.tsx meta.parameters entity.name.type',
        'source.tsx meta.type.annotation meta.type.parameters entity.name.type',
        'source.tsx meta.type.annotation',
        'source.tsx meta.type.parameters entity.name.type',
        'source.tsx type.annotation',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx meta.type.annotation meta.type.parameters support.type.primitive',
        'source.tsx support.type.primitive',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx entity.name.function',
        'source.tsx meta.definition.function.tsx entity.name.function',
        'source.tsx meta.definition.method',
        'source.tsx meta.definition.variable entity.name.function',
        'source.tsx meta.field.declaration.tsx',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx support.function.builtin',
        'source.tsx support.function.git-rebase',
        'source.tsx support.function',
        'source.tsx support.function.math',
        'source.tsx support.function.process',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx entity.other.inherited-class',
        'source.tsx new.expr entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx meta.return.type entity.name.type',
        'source.tsx meta.return.type support.type.primitive',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx meta.return.type meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.tsx meta.return.type meta.type.parameters support.type.primitive',
      ],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.tsx meta.return.type meta.type.parameters punctuation.definition.typeparameters',
        'source.tsx meta.return.type meta.type.tuple meta.brace.square',
        'source.tsx meta.return.type keyword.operator.type',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx entity.name.type.class',
        'source.tsx entity.name.type.enum',
        'source.tsx entity.name.type.instance',
        'source.tsx entity.name.type.module',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx punctuation.definition.template-expression.begin',
        'source.tsx punctuation.definition.template-expression.end',
        'source.tsx punctuation.definition.parameters.begin',
        'source.tsx punctuation.definition.parameters.end',
        'source.tsx meta.brace.angle',
        'source.tsx meta.brace.round',
        'source.tsx meta.brace.square',
        'source.tsx punctuation.definition.block',
        'source.tsx entity.function',
        'source.tsx entity.name',
        'source.tsx entity.other.attribute-name.css',
        'source.tsx entity.other.attribute-name.directive',
        'source.tsx entity.other.attribute-name',
        'source.tsx entity.other.inherited-class',
        'source.tsx entity.static',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx meta.decorator entity.name',
        'source.tsx meta.decorator entity.name.function',
        'source.tsx meta.decorator meta.function-call entity.name',
        'source.tsx meta.decorator variable.other.readwrite',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx string.regexp constant.other.character-class.set.regexp',
      ],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.tsx meta.var.expr string.regexp'],
      settings: {
        foreground: '#99CC88DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx string.regexp punctuation.definition.character-class.regexp',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source support.function.console'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source support.class.console'],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source support.function.promise'],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx string.regexp punctuation.definition.string.begin',
        'source.tsx string.regexp punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx variable.other.enummember',
        'source.tsx variable.arguments',
        'source.tsx variable.class',
        'source.tsx variable.language.arguments',
        'source.tsx variable.language',
        'source.tsx variable.name',
        'source.tsx variable.other.constant.object',
        'source.tsx variable.other.constant',
        'source.tsx variable.other.readwrite.alias',
        'source.tsx meta.array-binding-pattern-variable variable.other.constant',
        'source.tsx variable.other.readwrite',
        'source.tsx variable.other.readwrite',
        'source.tsx variable.other.regexp',
        'source.tsx variable.other',
        'source.tsx variable.parameter',
        'source.tsx variable',
        'source.tsx meta.array-binding-pattern-variable variable.other.constant',
        'source.tsx meta.object-binding-pattern-variable variable.other.constant',
      ],
      settings: {
        foreground: '#AADDCCCC',
      },
    },
    {
      scope: [
        'source.tsx meta.object-binding-pattern-variable variable.other.constant',
        'source.tsx meta.object.member meta.object-literal.key',
        'source.tsx meta.objectliteral meta.object.member',
        'source.tsx meta.var.expr meta.object-literal.key',
        'source.tsx variable.object.property',
        'source.tsx variable.other.constant.object.property',
        'source.tsx variable.other.constant.property',
        'source.tsx variable.other.property',
      ],
      settings: {
        foreground: '#66BBFFCC',
      },
    },
    {
      scope: ['source.tsx support.constant.property.math'],
      settings: {
        foreground: '#66BBFFCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx support.variable.property',
        'source.tsx support.variable.property.importmeta',
        'source.tsx support.variable.property.process',
        'source.tsx support.variable.property.target',
        'source.tsx support.type.property-name',
        'source.tsx support.type.property-name.css',
        'source.tsx support.property-value',
        'source.tsx support.property-value.scss',
      ],
      settings: {
        foreground: '#66BBFFBB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx constant',
        'source.tsx constant.character.escape.backslash.regexp',
        'source.tsx constant.character.numeric.regexp',
        'source.tsx constant.language',
        'source.tsx constant.language.import-export-all',
        'source.tsx constant.other.character-class.range.regexp',
        'source.tsx constant.other.character-class.regexp',
        'source.tsx constant.other.character-class.set.regexp',
        'source.tsx constant.rgb-value',
        'source.tsx constant.sha.git-rebase',
        'source.tsx constant.character.escape',
        'source.tsx constant.numeric',
        'source.tsx constant.numeric.binary',
        'source.tsx constant.numeric.decimal',
        'source.tsx constant.numeric.hex',
        'source.tsx constant.numeric.octal',
      ],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx string',
        'source.tsx string.constant.other.placeholder',
        'source.tsx string.entity',
        'source.tsx string.escape',
        'source.tsx string.quoted.double',
        'source.tsx string.quoted.single',
        'source.tsx string.regexp',
        'source.tsx string.tag',
        'source.tsx string.template',
        'source.tsx string.value',
      ],
      settings: {
        foreground: '#CCEE55CC',
      },
    },
    {
      scope: ['source.tsx storage.type.function.arrow'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.tsx storage.type.function'],
      settings: {
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx storage.type.function',
        'source.tsx storage.type.function.arrow',
      ],
      settings: {
        foreground: '#77CC22CC',
      },
    },
    {
      scope: ['source.tsx storage.type.class'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx meta.method.declaration.tsx storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx meta.class storage.modifier',
        'source.tsx meta.method.declaration storage.modifier',
        'source.tsx storage.type.property',
      ],
      settings: {
        foreground: '#FF9911DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx keyword.control.new',
        'source.tsx keyword.operator.new',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx meta.method.declaration storage.modifier.async',
        'source.tsx storage.modifier.async',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx variable.language.super'],
      settings: {
        foreground: '#EE11AACC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx variable.language.this'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx meta.import variable.other.readwrite.alias',
        'source.tsx meta.import variable.other.readwrite',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source.tsx meta.import punctuation.definition.block'],
      settings: {
        foreground: '#FFDD00CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx constant.language.import-export-all'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx meta.import string.quoted.single',
        'source.tsx meta.import string.quoted.double',
      ],
      settings: {
        foreground: '#CCEE55CC',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.tsx meta.import keyword.control.as',
        'source.tsx meta.import keyword.control.default',
        'source.tsx meta.import keyword.control.from',
        'source.tsx meta.import keyword.control.import',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx storage.type.internaldeclaration',
        'source.tsx storage.type.namespace',
        'source.tsx storage.type',
        'source.tsx keyword.control.from',
        'source.tsx keyword.control.import',
        'source.tsx keyword.control.export',
        'source.tsx meta.export.default keyword.control.default',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx keyword.control.as',
        'source.tsx keyword.control.default',
        'source.tsx keyword.control',
        'source.tsx keyword.control.anchor.regexp',
        'source.tsx keyword.control.conditional',
        'source.tsx keyword.control.less',
        'source.tsx keyword.control.loop',
        'source.tsx keyword.control.module',
        'source.tsx keyword.control.require',
        'source.tsx keyword.control.switch',
        'source.tsx keyword.control.trycatch',
        'source.tsx keyword.control.with',
        'source.tsx keyword',
        'source.tsx keyword.other',
        'source.tsx keyword.generator.asterisk',
        'source.tsx meta.block keyword.control.flow',
        'source.tsx keyword.operator.logical',
        'source.tsx storage.type.numeric.bigint',
      ],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.tsx storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx meta.block meta.var.expr storage.type'],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source.tsx punctuation.decorator'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.tsx constant.language.boolean.false'],
      settings: {
        foreground: '#EE4433CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx constant.language.boolean.true'],
      settings: {
        foreground: '#77CC22CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx constant.language.undefined'],
      settings: {
        foreground: '#AA77BBAA',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx constant.language.null'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.tsx support.type.builtin'],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx constant.language.infinity',
        'source.tsx constant.language.nan',
      ],
      settings: {
        foreground: '#77AADDCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.tsx keyword.operator.arithmetic',
        'source.tsx keyword.operator.assignment.compound.bitwise',
        'source.tsx keyword.operator.assignment.compound',
        'source.tsx keyword.operator.bitwise.shift',
        'source.tsx keyword.operator.bitwise',
        'source.tsx keyword.operator.decrement',
        'source.tsx keyword.operator.increment',
        'source.tsx keyword.operator.definiteassignment',
        'source.tsx keyword.operator',
        'source.tsx keyword.operator.comparison',
        'source.tsx keyword.operator.ternary',
        'source.tsx punctuation.separator.key-value',
        'source.tsx keyword.operator.assignment',
        'source.tsx keyword.operator.type.annotation',
        'source.tsx keyword.operator.expression.delete',
        'source.tsx keyword.operator.expression.import',
        'source.tsx keyword.operator.expression.in',
        'source.tsx keyword.operator.expression.infer',
        'source.tsx keyword.operator.expression.instanceof',
        'source.tsx keyword.operator.expression.is',
        'source.tsx keyword.operator.expression.keyof',
        'source.tsx keyword.operator.expression.of',
        'source.tsx keyword.operator.expression.typeof',
        'source.tsx keyword.operator.expression.void',
        'source.tsx keyword.operator.negation.regexp',
        'source.tsx keyword.operator.optional',
        'source.tsx keyword.operator.or.regexp',
        'source.tsx keyword.operator.quantifier.regexp',
        'source.tsx keyword.operator.relational',
        'source.tsx keyword.operator.type.modifier',
        'source.tsx keyword.operator.type',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx keyword.operator.spread',
        'source.tsx keyword.operator.rest',
      ],
      settings: {
        foreground: '#44BB99AA',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.tsx *link*',
        'source.tsx *uri*',
        'source.tsx *url*',
        'source.tsx case-clause.expr ',
        'source.tsx case-clause.expr',
        'source.tsx cast.expr',
        'source.tsx header',
        'source.tsx keyword.other.back-reference.regexp',
        'source.tsx keyword.other.unit',
        'source.tsx markup.changed',
        'source.tsx markup.deleted',
        'source.tsx markup.heading',
        'source.tsx markup.inline.raw',
        'source.tsx markup.inserted',
        'source.tsx markup.punctuation.list.beginning',
        'source.tsx markup.punctuation.quote.beginning',
        'source.tsx markup.underline',
        'source.tsx module.node',
        'source.tsx new.expr',
        'source.tsx prototype',
        'source.tsx punctuation.definition.binding-pattern.array',
        'source.tsx punctuation.definition.binding-pattern.object',
        'source.tsx source.embedded',
        'source.tsx switch-block.expr',
        'source.tsx switch-expression.expr',
        'source.tsx switch-statement.expr',
        'source.tsx variable.other.object',
        'source.tsx meta.object.member variable.other.object',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx support.class',
        'source.tsx support.class.builtin',
        'source.tsx support.class.node',
        'source.tsx support.class.promise',
        'source.tsx support.constant',
        'source.tsx support.constant',
        'source.tsx support.constant.math',
        'source.tsx support.type',
        'source.tsx support.type.object.module',
        'source.tsx support.variable',
        'source.tsx support.variable.object.node',
        'source.tsx support.variable.object.process',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.tsx emphasis',
        'source.tsx markup.bold',
        'source.tsx strong',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.tsx markup.italic'],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.tsx punctuation.quasi',
        'source.tsx string.quasi',
        'source.tsx invalid',
        'source.tsx invalid.illegal',
        'source.tsx invalid.illegal.newline',
      ],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.tsx invalid.deprecated'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'source.js storage.type.enum',
        'source.js storage.type.interface',
        'source.js storage.type.type',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js meta.interface entity.name.type.interface',
        'entity.name.type.alias',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js meta.interface meta.definition.property variable.object.property',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js meta.interface meta.type.annotation support.type.primitive',
        'source.js meta.type.declaration support.type.primitive',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js meta.interface meta.type.annotation entity.name.type',
        'source.js meta.type.declaration entity.name.type',
        'source.js meta.type.declaration meta.type.function.return meta.type.parameters entity.name.type',
        'source.js meta.function meta.block meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js meta.type.declaration meta.type.parameters entity.name.type',
        'source.js meta.function meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js entity.name.type',
        'source.js meta.parameters entity.name.type',
        'source.js meta.type.annotation meta.type.parameters entity.name.type',
        'source.js meta.type.annotation',
        'source.js meta.type.parameters entity.name.type',
        'source.js type.annotation',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js meta.type.annotation meta.type.parameters support.type.primitive',
        'source.js support.type.primitive',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js entity.name.function',
        'source.js meta.definition.function.js entity.name.function',
        'source.js meta.definition.method',
        'source.js meta.definition.variable entity.name.function',
        'source.js meta.field.declaration.js',
        'source.js support.function',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js support.function.builtin',
        'source.js support.function.math',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js support.function.git-rebase',
        'source.js support.function.dom',
        'source.js support.function.process',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js entity.other.inherited-class',
        'source.js new.expr entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js meta.return.type entity.name.type',
        'source.js meta.return.type support.type.primitive',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js meta.return.type meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.js meta.return.type meta.type.parameters support.type.primitive',
      ],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.js meta.return.type meta.type.parameters punctuation.definition.typeparameters',
        'source.js meta.return.type meta.type.tuple meta.brace.square',
        'source.js meta.return.type keyword.operator.type',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js entity.name.type.class',
        'source.js entity.name.type.enum',
        'source.js entity.name.type.instance',
        'source.js entity.name.type.module',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js punctuation.definition.parameters.begin',
        'source.js punctuation.definition.parameters.end',
        'source.js meta.brace.angle',
        'source.js meta.brace.round',
        'source.js meta.brace.square',
        'source.js punctuation.definition.block',
        'source.js entity.function',
        'source.js entity.name',
        'source.js entity.other.attribute-name.css',
        'source.js entity.other.attribute-name.directive',
        'source.js entity.other.attribute-name',
        'source.js entity.other.inherited-class',
        'source.js entity.static',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js meta.decorator entity.name',
        'source.js meta.decorator entity.name.function',
        'source.js meta.decorator meta.function-call entity.name',
        'source.js meta.decorator variable.other.readwrite',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js string.regexp constant.other.character-class.set.regexp',
      ],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.js meta.var.expr string.regexp'],
      settings: {
        foreground: '#99CC88DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js string.regexp punctuation.definition.character-class.regexp',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source support.function.console'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source support.class.console'],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source support.function.promise'],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js string.regexp punctuation.definition.string.begin',
        'source.js string.regexp punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js variable.other.enummember',
        'source.js variable.arguments',
        'source.js variable.class',
        'source.js variable.language.arguments',
        'source.js variable.language',
        'source.js variable.name',
        'source.js variable.other.constant.object',
        'source.js variable.other.constant',
        'source.js variable.other.readwrite.alias',
        'source.js meta.array-binding-pattern-variable variable.other.constant',
        'source.js variable.other.readwrite',
        'source.js variable.other.readwrite',
        'source.js variable.other.regexp',
        'source.js variable.other',
        'source.js variable.parameter',
        'source.js variable',
        'source.js meta.array-binding-pattern-variable variable.other.constant',
        'source.js meta.object-binding-pattern-variable variable.other.constant',
      ],
      settings: {
        foreground: '#AADDCCCC',
      },
    },
    {
      scope: [
        'source.js meta.object-binding-pattern-variable variable.other.constant',
        'source.js meta.object.member meta.object-literal.key',
        'source.js meta.objectliteral meta.object.member',
        'source.js meta.var.expr meta.object-literal.key',
        'source.js variable.object.property',
        'source.js variable.other.constant.object.property',
        'source.js variable.other.constant.property',
        'source.js variable.other.property',
      ],
      settings: {
        foreground: '#66BBFFCC',
      },
    },
    {
      scope: ['source.js support.constant.property.math'],
      settings: {
        foreground: '#66BBFFCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js support.variable.property',
        'source.js support.variable.property.importmeta',
        'source.js support.variable.property.process',
        'source.js support.variable.property.target',
        'source.js support.type.property-name',
        'source.js support.type.property-name.css',
        'source.js support.property-value',
        'source.js support.property-value.scss',
      ],
      settings: {
        foreground: '#66BBFFBB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js constant',
        'source.js constant.character.escape.backslash.regexp',
        'source.js constant.character.numeric.regexp',
        'source.js constant.language',
        'source.js constant.language.import-export-all',
        'source.js constant.other.character-class.range.regexp',
        'source.js constant.other.character-class.regexp',
        'source.js constant.other.character-class.set.regexp',
        'source.js constant.rgb-value',
        'source.js constant.sha.git-rebase',
        'source.js constant.character.escape',
        'source.js constant.numeric',
        'source.js constant.numeric.binary',
        'source.js constant.numeric.decimal',
        'source.js constant.numeric.hex',
        'source.js constant.numeric.octal',
      ],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js string',
        'source.js string.constant.other.placeholder',
        'source.js string.entity',
        'source.js string.escape',
        'source.js string.quoted.double',
        'source.js string.quoted.single',
        'source.js string.regexp',
        'source.js string.tag',
        'source.js string.template',
        'source.js string.value',
      ],
      settings: {
        foreground: '#CCEE55CC',
      },
    },
    {
      scope: ['source.js storage.type.function.arrow'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.js storage.type.function'],
      settings: {
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js storage.type.function',
        'source.js storage.type.function.arrow',
      ],
      settings: {
        foreground: '#77CC22CC',
      },
    },
    {
      scope: ['source.js storage.type.class'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js meta.method.declaration.js storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js meta.class storage.modifier',
        'source.js meta.method.declaration storage.modifier',
        'source.js storage.type.property',
      ],
      settings: {
        foreground: '#FF9911DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js keyword.control.new',
        'source.js keyword.operator.new',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js meta.method.declaration storage.modifier.async',
        'source.js storage.modifier.async',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js variable.language.super'],
      settings: {
        foreground: '#EE11AACC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js variable.language.this'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js meta.import variable.other.readwrite.alias',
        'source.js meta.import variable.other.readwrite',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source.js meta.import punctuation.definition.block'],
      settings: {
        foreground: '#FFDD00CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js constant.language.import-export-all'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js meta.import string.quoted.single',
        'source.js meta.import string.quoted.double',
      ],
      settings: {
        foreground: '#CCEE55CC',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.js meta.import keyword.control.as',
        'source.js meta.import keyword.control.default',
        'source.js meta.import keyword.control.from',
        'source.js meta.import keyword.control.import',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.js storage.type.internaldeclaration',
        'source.js storage.type.namespace',
        'source.js storage.type',
        'source.js keyword.control.from',
        'source.js keyword.control.import',
        'source.js keyword.control.export',
        'source.js meta.export.default keyword.control.default',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js keyword.control.as',
        'source.js keyword.control.default',
        'source.js keyword.control',
        'source.js keyword.control.anchor.regexp',
        'source.js keyword.control.conditional',
        'source.js keyword.control.less',
        'source.js keyword.control.loop',
        'source.js keyword.control.module',
        'source.js keyword.control.require',
        'source.js keyword.control.switch',
        'source.js keyword.control.trycatch',
        'source.js keyword.control.with',
        'source.js keyword',
        'source.js keyword.other',
        'source.js keyword.generator.asterisk',
        'source.js meta.block keyword.control.flow',
        'source.js keyword.operator.logical',
        'source.js storage.type.numeric.bigint',
      ],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.js storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js meta.block meta.var.expr storage.type'],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source.js punctuation.decorator'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.js constant.language.boolean.false'],
      settings: {
        foreground: '#EE4433CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js constant.language.boolean.true'],
      settings: {
        foreground: '#77CC22CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js constant.language.undefined'],
      settings: {
        foreground: '#AA77BBAA',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js constant.language.null'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js support.type.builtin'],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js constant.language.infinity',
        'source.js constant.language.nan',
      ],
      settings: {
        foreground: '#77AADDCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source.js storage.type.numeric.bigint'],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.js keyword.operator.arithmetic',
        'source.js keyword.operator.assignment.compound.bitwise',
        'source.js keyword.operator.assignment.compound',
        'source.js keyword.operator.bitwise.shift',
        'source.js keyword.operator.bitwise',
        'source.js keyword.operator.decrement',
        'source.js keyword.operator.increment',
        'source.js keyword.operator.definiteassignment',
        'source.js keyword.operator',
        'source.js keyword.operator.comparison',
        'source.js keyword.operator.ternary',
        'source.js punctuation.separator.key-value',
        'source.js keyword.operator.assignment',
        'source.js keyword.operator.type.annotation',
        'source.js keyword.operator.expression.delete',
        'source.js keyword.operator.expression.import',
        'source.js keyword.operator.expression.in',
        'source.js keyword.operator.expression.infer',
        'source.js keyword.operator.expression.instanceof',
        'source.js keyword.operator.expression.is',
        'source.js keyword.operator.expression.keyof',
        'source.js keyword.operator.expression.of',
        'source.js keyword.operator.expression.typeof',
        'source.js keyword.operator.expression.void',
        'source.js keyword.operator.negation.regexp',
        'source.js keyword.operator.optional',
        'source.js keyword.operator.or.regexp',
        'source.js keyword.operator.quantifier.regexp',
        'source.js keyword.operator.relational',
        'source.js keyword.operator.type.modifier',
        'source.js keyword.operator.type',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js keyword.operator.spread',
        'source.js keyword.operator.rest',
      ],
      settings: {
        foreground: '#44BB99AA',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js *link*',
        'source.js *uri*',
        'source.js *url*',
        'source.js case-clause.expr ',
        'source.js case-clause.expr',
        'source.js cast.expr',
        'source.js header',
        'source.js keyword.other.back-reference.regexp',
        'source.js keyword.other.unit',
        'source.js markup.changed',
        'source.js markup.deleted',
        'source.js markup.heading',
        'source.js markup.inline.raw',
        'source.js markup.inserted',
        'source.js markup.punctuation.list.beginning',
        'source.js markup.punctuation.quote.beginning',
        'source.js markup.underline',
        'source.js module.node',
        'source.js new.expr',
        'source.js prototype',
        'source.js punctuation.definition.binding-pattern.array',
        'source.js punctuation.definition.binding-pattern.object',
        'source.js source.embedded',
        'source.js switch-block.expr',
        'source.js switch-expression.expr',
        'source.js switch-statement.expr',
        'source.js variable.other.object',
        'source.js meta.object.member variable.other.object',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js support.class',
        'source.js support.class.builtin',
        'source.js support.class.node',
        'source.js support.class.promise',
        'source.js support.constant',
        'source.js support.constant',
        'source.js support.constant.math',
        'source.js support.type',
        'source.js support.type.object.module',
        'source.js support.variable',
        'source.js support.variable.object.node',
        'source.js support.variable.object.process',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.js emphasis',
        'source.js markup.bold',
        'source.js strong',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.js markup.italic'],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source.js punctuation.quasi',
        'source.js string.quasi',
        'source.js invalid',
        'source.js invalid.illegal',
        'source.js invalid.illegal.newline',
      ],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.js invalid.deprecated'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'underline',
      },
    },
    {
      scope: ['source.json punctuation.separator.dictionary.key-value'],
      settings: {
        foreground: '#BBBB33',
      },
    },
    {
      scope: 'source.json constant.numeric',
      settings: {
        foreground: '#DDDDDD',
      },
    },
    {
      scope: ['source.json constant.language'],
      settings: {
        foreground: '#55BBEEDD',
        fontStyle: 'italic bold',
      },
    },
    {
      scope: 'source.json string.quoted.double',
      settings: {
        foreground: '#CCEE55CC',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name',
      ],
      settings: {
        foreground: '#FFCC55DD',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
      ],
      settings: {
        foreground: '#DD8899',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
      ],
      settings: {
        foreground: '#99CC88',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
      ],
      settings: {
        foreground: '#55BBEE',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
      ],
      settings: {
        foreground: '#DDDDDD',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
      ],
      settings: {
        foreground: '#99CC88',
      },
    },
    {
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name',
      ],
      settings: {
        foreground: '#FFCC55DD',
      },
    },
    {
      scope: ['source.json string.quasi'],
      settings: {
        foreground: '#BB3355',
        fontStyle: '',
      },
    },
    {
      scope: ['source.json punctuation.quasi'],
      settings: {
        foreground: '#E42C3EEE',
        fontStyle: '',
      },
    },
    {
      scope: ['source.json invalid'],
      settings: {
        foreground: '#BB3355',
        fontStyle: '',
      },
    },
    {
      scope: ['source.json invalid.deprecated'],
      settings: {
        foreground: '#BB3355',
        fontStyle: 'underline',
      },
    },
    {
      scope: ['source.json invalid.illegal'],
      settings: {
        foreground: '#BB3355',
        fontStyle: '',
      },
    },
    {
      scope: ['source.json invalid.illegal.newline'],
      settings: {
        foreground: '#BB3355',
        fontStyle: '',
      },
    },
    {
      scope: ['source.yaml comment.line.number-sign'],
      settings: {
        foreground: '#22BBDD99',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.yaml comment.line.number-sign punctuation.definition.comment',
      ],
      settings: {
        foreground: '#44AAEEBB',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.yaml string.quoted.double',
        'source.yaml string.quoted.single',
        'source.yaml string.unquoted.plain.out',
      ],
      settings: {
        foreground: '#CCEE55BB',
      },
    },
    {
      scope: [
        'source.yaml punctuation.definition.block.sequence.item',
        'source.yaml punctuation.separator.key-value.mapping',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.yaml string.unquoted.plain.out entity.name.tag'],
      settings: {
        foreground: '#FFCC55BB',
      },
    },
    {
      scope: ['source.yaml string.unquoted.plain.in entity.name.tag'],
      settings: {
        foreground: '#DD8899BB',
      },
    },
    {
      scope: [
        'source.yaml string.unquoted.plain.in',
        'source.yaml constant.language.boolean.yaml',
      ],
      settings: {
        foreground: '#99CC88BB',
      },
    },
    {
      scope: [
        'comment.block.documentation.js punctuation.definition.comment.js',
        'comment.block.documentation.ts punctuation.definition.comment.ts',
        'comment.block.documentation.js',
        'comment.block.documentation.ts',
      ],
      settings: {
        foreground: '#666677CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'storage.type.class.jsdoc punctuation.definition.block.tag.jsdoc',
      ],
      settings: {
        foreground: '#EE3355BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['storage.type.class.jsdoc'],
      settings: {
        foreground: '#EEDDAA99',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'constant.other.email.link.underline.jsdoc',
        'variable.other.link.underline.jsdoc',
      ],
      settings: {
        foreground: '#DDBB99BB',
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'punctuation.definition.bracket.angle.begin.jsdoc',
        'punctuation.definition.bracket.angle.end.jsdoc',
        'punctuation.definition.bracket.curly.begin.jsdoc',
        'punctuation.definition.bracket.curly.end.jsdoc',
        'punctuation.definition.bracket.square.begin.jsdoc',
        'punctuation.definition.bracket.square.end.jsdoc',
        'punctuation.definition.optional-value.begin.bracket.square.jsdoc',
        'punctuation.definition.optional-value.end.bracket.square.jsdoc',
      ],
      settings: {
        foreground: '#EEDDAAAA',
        fontStyle: '',
      },
    },
    {
      scope: [
        'constant.language.access-type.jsdoc',
        'constant.language.symbol-type.jsdoc',
        'constant.other.description.jsdoc',
        'entity.name.tag.inline.jsdoc',
        'entity.name.type.instance.jsdoc',
        'keyword.operator.assignment.jsdoc',
        'keyword.operator.control.jsdoc',
        'meta.example.jsdoc',
        'punctuation.definition.inline.tag.jsdoc',
        'punctuation.separator.pipe.jsdoc',
        'variable.other.description.jsdoc',
        'variable.other.jsdoc',
      ],
      settings: {
        foreground: '#666677AA',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['entity.name.type.instance.jsdoc'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: '',
      },
    },
    {
      scope: ['comment.block.documentation variable.other.jsdoc'],
      settings: {
        foreground: '#AA33DDCC',
        fontStyle: '',
      },
    },
    {
      scope: ['keyword.operator.assignment.jsdoc'],
      settings: {
        foreground: '#44BB99AA',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['variable.other.jsdoc source.embedded'],
      settings: {
        foreground: '#66BBFFCC',
        fontStyle: '',
      },
    },
    {
      scope: 'emphasis',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'strong',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'header',
      settings: {
        foreground: '#458588',
      },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: '#506899',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['constant', 'variable.arguments'],
      settings: {
        foreground: '#D3869B',
      },
    },
    {
      scope: 'constant.rgb-value',
      settings: {
        foreground: '#EBDBB2',
      },
    },
    {
      scope: 'entity.name.selector',
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: 'entity.other.attribute-name.css',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: '#CC241D',
      },
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: '#FE8019',
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: '#FE8019',
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: '#D65E0E',
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'markup.punctuation.quote.beginning',
      settings: {
        foreground: '#98971A',
      },
    },
    {
      scope: 'markup.punctuation.list.beginning',
      settings: {
        foreground: '#99C6CA',
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: '#D65E0E',
      },
    },
    {
      scope: 'meta.selector',
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: [],
      settings: {
        foreground: '#D79921',
      },
    },
    {
      scope: 'meta.preprocessor',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'meta.structure.dictionary.key.python',
      settings: {
        foreground: '#689E6A',
      },
    },
    {
      scope: 'meta.header.diff',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: '#F42C3E',
      },
    },
    {
      scope: 'storage.modifier',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'string',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'string.tag',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'string.value',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'string.escape',
      settings: {
        foreground: '#F42C3E',
      },
    },
    {
      scope: 'string.quasi',
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: 'string.entity',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'object',
      settings: {
        foreground: '#EBDBB2',
      },
    },
    {
      scope: 'module.node',
      settings: {
        foreground: '#99C6CA',
      },
    },
    {
      scope: 'support.type.property-name',
      settings: {
        foreground: '#FABE2F',
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: '#F42C3E',
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: '#BB66BBDD',
      },
    },
    {
      scope: 'keyword.control.module',
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: 'keyword.control.less',
      settings: {
        foreground: '#D79921',
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: 'keyword.operator.new',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: 'metatag.php',
      settings: {
        foreground: '#FE8019',
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: '#689E6A',
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: '#B8BB26',
      },
    },
    {
      scope: ['storage.modifier.import.java', 'storage.modifier.package.java'],
      settings: {
        foreground: '#EBDBB2',
      },
    },
    {
      scope: [
        'meta.type.name',
        'meta.cast',
        'meta.type.annotation',
        'support.type',
        'storage.type.cs',
        'storage.type.java',
        'variable.class',
      ],
      settings: {
        foreground: '#FABE2F',
      },
    },
    {
      scope: 'variable.this',
      settings: {
        foreground: '#D3869B',
      },
    },
    {
      scope: [
        'entity.name',
        'entity.static',
        'entity.name.class.static.function',
        'entity.name.function',
        'entity.name.class',
        'entity.name.type',
      ],
      settings: {
        foreground: '#FABE2F',
      },
    },
    {
      scope: [
        'storage.type.function',
        'entity.function',
        'entity.name.function.static',
      ],
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: ['variable.language'],
      settings: {
        foreground: '#D3869B',
        fontStyle: 'italic',
      },
    },
    {
      scope: 'entity.name.function.function-call',
      settings: {
        foreground: '#7EC16E',
      },
    },
    {
      scope: [
        'entity.name.method',
        'entity.name.method.function-call',
        'entity.name.static.function-call',
      ],
      settings: {
        foreground: '#689E6A',
      },
    },
    {
      scope: 'brace',
      settings: {
        foreground: '#D5C4A1',
      },
    },
    {
      scope: [
        'meta.parameter.type.variable',
        'variable.parameter',
        'variable',
        'variable.name',
        'variable.other',
      ],
      settings: {
        foreground: '#99C6CA',
      },
    },
    {
      scope: [
        'support.property-value',
        'constant.rgb-value',
        'support.property-value.scss',
        'constant.rgb-value.scss',
      ],
      settings: {
        foreground: '#D65E0E',
      },
    },
    {
      scope: 'prototype',
      settings: {
        foreground: '#D3869B',
      },
    },
    {
      scope: 'storage.type.class',
      settings: {
        foreground: '#F42C3E',
      },
    },
    {
      scope: ['entity.name.tag', 'punctuation.tag'],
      settings: {
        foreground: '#FABE2F',
      },
    },
    {
      scope: ['punctuation'],
      settings: {
        foreground: '#EBDBB2',
      },
    },
    {
      scope: 'punctuation.quasi',
      settings: {
        foreground: '#F42C3E',
      },
    },
    {
      scope: ['meta.tag meta.jsx.children'],
      settings: {
        foreground: '#CFC5B2',
      },
    },
    {
      scope: [
        'meta.tag keyword.operator.assignment.tsx',
        'meta.tag keyword.operator.assignment.js',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'meta.tag entity.other.attribute-name.tsx',
        'meta.tag entity.other.attribute-name.js',
        'meta.tag meta.tag.attributes.tsx',
        'meta.tag meta.tag.attributes.js',
      ],
      settings: {
        foreground: '#FFCC55DD',
      },
    },
    {
      scope: [
        'meta.tag string.quoted.double.tsx',
        'meta.tag string.quoted.double.js',
        'meta.tag string.quoted.single.tsx',
        'meta.tag string.quoted.single.js',
      ],
      settings: {
        foreground: '#BBEE55BB',
      },
    },
    {
      scope: [],
      settings: {
        foreground: '#FFCC55DD',
      },
    },
    {
      scope: ['meta.tag entity.name.tag.tsx', 'meta.tag entity.name.tag.js'],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'meta.tag support.class.component.tsx',
        'meta.tag support.class.component.js',
      ],
      settings: {
        foreground: '#88BBDDCC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'meta.tag punctuation.definition.tag.begin.tsx',
        'meta.tag punctuation.definition.tag.end.tsx',
      ],
      settings: {
        foreground: '#66CCEEDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'meta.tag punctuation.definition.tag.begin.js',
        'meta.tag punctuation.definition.tag.end.js',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: ['text.html meta.tag punctuation.definition.tag'],
      settings: {
        foreground: '#FFEECCDD',
        fontStyle: '',
      },
    },
    {
      scope: ['text.html meta.tag entity.name.tag'],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: ['text.html meta.tag entity.other.attribute-name'],
      settings: {
        foreground: '#AADD33CC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'text.html meta.tag meta.attribute string.quoted.single',
        'text.html meta.tag meta.attribute string.quoted.double',
      ],
      settings: {
        foreground: '#EEEE33CC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'text.html meta.tag meta.attribute string',
        'text.html.derivative constant.character.entity',
      ],
      settings: {
        foreground: '#FF7733DD',
        fontStyle: '',
      },
    },
    {
      scope: ['text.html'],
      settings: {
        foreground: '#FFEECCDD',
        fontStyle: '',
      },
    },
    {
      scope: ['text.html.derivative comment.block.html'],
      settings: {
        foreground: '#66DDFF88',
        fontStyle: '',
      },
    },
    {
      scope: [
        'text.html.derivative comment.block punctuation.definition.comment',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source.css comment.block punctuation.definition.comment'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.css comment.block'],
      settings: {
        foreground: '#5533EECC',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.css meta.selector entity.name.tag'],
      settings: {
        foreground: '#55AAEECC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css meta.selector entity.other.attribute-name.pseudo-element',
      ],
      settings: {
        foreground: '#EE8855CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css meta.selector entity.other.attribute-name.class punctuation.definition.entity',
        'source.css meta.selector entity.other.attribute-name.class',
      ],
      settings: {
        foreground: '#FFEEBBCC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css meta.selector entity.other.attribute-name.pseudo-class',
        'source.css meta.property-list meta.property-value meta.function.color.css',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css meta.property-list meta.property-value meta.function.color.css',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.css meta.selector entity.other.attribute-name.id punctuation.definition.entity',
        'source.css meta.selector entity.other.attribute-name.id',
      ],
      settings: {
        foreground: '#EE8855EE',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css meta.property-list meta.property-name support.type.property-name.css',
        'source.css support.type.property-name.css',
      ],
      settings: {
        foreground: '#88DDCC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.css meta.at-rule.media.header support.type.property-name.media',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source.css meta.at-rule.media.header.css'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css keyword.control.at-rule.media punctuation.definition.keyword',
        'source.css meta.at-rule.media.header support.constant.media',
      ],
      settings: {
        foreground: '#FFEEBBCC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css meta.at-rule.media.header keyword.control.at-rule.media',
      ],
      settings: {
        foreground: '#DD44CCCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source.css meta.property-value keyword.other.unit',
        'source.css entity.other.attribute-name.css',
        'source.css meta.at-rule.media.header keyword.other.unit',
      ],
      settings: {
        foreground: '#CCEE55CC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.css support.constant.property-value',
        'source.css meta.property-value support.constant.property-value',
      ],
      settings: {
        foreground: '#DD22CCDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.css meta.property-value constant.numeric',
        'source.css meta.at-rule.media.header constant.numeric',
      ],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.css string.quoted.double.css',
        'source.css string.quoted.single.css',
      ],
      settings: {
        foreground: '#DDFF88DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source.css meta.selector entity.other.attribute-name.pseudo-element punctuation.definition.entity',
        'source.css meta.selector entity.other.attribute-name.pseudo-class punctuation.definition.entity',
      ],
      settings: {
        foreground: '#FFEEBBCC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.css meta.property-value keyword.other.important',
        'source.css meta.at-rule.media.header keyword.operator.logical',
      ],
      settings: {
        foreground: '#FF4422CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source storage.type.enum',
        'source storage.type.interface',
        'source storage.type.type',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source meta.interface entity.name.type.interface',
        'entity.name.type.alias',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source meta.interface meta.definition.property variable.object.property',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source meta.interface meta.type.annotation support.type.primitive',
        'source meta.type.declaration support.type.primitive',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source meta.interface meta.type.annotation entity.name.type',
        'source meta.type.declaration entity.name.type',
        'source meta.type.declaration meta.type.function.return meta.type.parameters entity.name.type',
        'source meta.function meta.block meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source meta.type.declaration meta.type.parameters entity.name.type',
        'source meta.function meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source entity.name.type',
        'source meta.parameters entity.name.type',
        'source meta.type.annotation meta.type.parameters entity.name.type',
        'source meta.type.annotation',
        'source meta.type.parameters entity.name.type',
        'source type.annotation',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source meta.type.annotation meta.type.parameters support.type.primitive',
        'source support.type.primitive',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source entity.name.function',
        'source meta.definition.function entity.name.function',
        'source meta.definition.method',
        'source meta.definition.variable entity.name.function',
        'source meta.field.declaration',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source support.function.builtin',
        'source support.function.git-rebase',
        'source support.function',
        'source support.function.math',
        'source support.function.process',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source entity.other.inherited-class',
        'source new.expr entity.name.type',
      ],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source meta.return.type entity.name.type',
        'source meta.return.type support.type.primitive',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source meta.return.type meta.type.parameters entity.name.type'],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source meta.return.type meta.type.parameters support.type.primitive',
      ],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source meta.return.type meta.type.parameters punctuation.definition.typeparameters',
        'source meta.return.type meta.type.tuple meta.brace.square',
        'source meta.return.type keyword.operator.type',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source entity.name.type.class',
        'source entity.name.type.enum',
        'source entity.name.type.instance',
        'source entity.name.type.module',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source punctuation.definition.parameters.begin',
        'source punctuation.definition.parameters.end',
        'source meta.brace.angle',
        'source meta.brace.round',
        'source meta.brace.square',
        'source punctuation.definition.block',
        'source entity.function',
        'source entity.name',
        'source entity.other.attribute-name.css',
        'source entity.other.attribute-name.directive',
        'source entity.other.attribute-name',
        'source entity.other.inherited-class',
        'source entity.static',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source meta.decorator entity.name',
        'source meta.decorator entity.name.function',
        'source meta.decorator meta.function-call entity.name',
        'source meta.decorator variable.other.readwrite',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source string.regexp constant.other.character-class.set.regexp'],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source meta.var.expr string.regexp'],
      settings: {
        foreground: '#99CC88DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source string.regexp punctuation.definition.character-class.regexp',
      ],
      settings: {
        foreground: '#FFCC55DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source support.function.console'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source support.class.console'],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source support.function.promise'],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source string.regexp punctuation.definition.string.begin',
        'source string.regexp punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source variable.other.enummember',
        'source variable.arguments',
        'source variable.class',
        'source variable.language.arguments',
        'source variable.language',
        'source variable.name',
        'source variable.other.constant.object',
        'source variable.other.constant',
        'source variable.other.readwrite.alias',
        'source meta.array-binding-pattern-variable variable.other.constant',
        'source variable.other.readwrite',
        'source variable.other.readwrite',
        'source variable.other.regexp',
        'source variable.other',
        'source variable.parameter',
        'source variable',
        'source meta.array-binding-pattern-variable variable.other.constant',
        'source meta.object-binding-pattern-variable variable.other.constant',
      ],
      settings: {
        foreground: '#AADDCCCC',
      },
    },
    {
      scope: [
        'source meta.object-binding-pattern-variable variable.other.constant',
        'source meta.object.member meta.object-literal.key',
        'source meta.objectliteral meta.object.member',
        'source meta.var.expr meta.object-literal.key',
        'source variable.object.property',
        'source variable.other.constant.object.property',
        'source variable.other.constant.property',
        'source variable.other.property',
      ],
      settings: {
        foreground: '#66BBFFCC',
      },
    },
    {
      scope: ['source support.constant.property.math'],
      settings: {
        foreground: '#66BBFFCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source support.variable.property',
        'source support.variable.property.importmeta',
        'source support.variable.property.process',
        'source support.variable.property.target',
        'source support.type.property-name',
        'source support.type.property-name.css',
        'source support.property-value',
        'source support.property-value.scss',
      ],
      settings: {
        foreground: '#66BBFFBB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source constant',
        'source constant.character.escape.backslash.regexp',
        'source constant.character.numeric.regexp',
        'source constant.language',
        'source constant.language.import-export-all',
        'source constant.other.character-class.range.regexp',
        'source constant.other.character-class.regexp',
        'source constant.other.character-class.set.regexp',
        'source constant.rgb-value',
        'source constant.sha.git-rebase',
        'source constant.character.escape',
        'source constant.numeric',
        'source constant.numeric.binary',
        'source constant.numeric.decimal',
        'source constant.numeric.hex',
        'source constant.numeric.octal',
      ],
      settings: {
        foreground: '#EE6677DD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source string',
        'source string.constant.other.placeholder',
        'source string.entity',
        'source string.escape',
        'source string.quoted.double',
        'source string.quoted.single',
        'source string.regexp',
        'source string.tag',
        'source string.template',
        'source string.value',
      ],
      settings: {
        foreground: '#CCEE55CC',
      },
    },
    {
      scope: ['source storage.type.function.arrow'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source storage.type.function'],
      settings: {
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source storage.type.function',
        'source storage.type.function.arrow',
      ],
      settings: {
        foreground: '#77CC22CC',
      },
    },
    {
      scope: ['source storage.type.class'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source meta.method.declaration storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source meta.class storage.modifier',
        'source meta.method.declaration storage.modifier',
        'source storage.type.property',
      ],
      settings: {
        foreground: '#FF9911DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source keyword.control.new', 'source keyword.operator.new'],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source meta.method.declaration storage.modifier.async',
        'source storage.modifier.async',
      ],
      settings: {
        foreground: '#FF9911CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source variable.language.super'],
      settings: {
        foreground: '#EE11AACC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source variable.language.this'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source meta.import variable.other.readwrite.alias',
        'source meta.import variable.other.readwrite',
      ],
      settings: {
        foreground: '#AADDCCCC',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source meta.import punctuation.definition.block'],
      settings: {
        foreground: '#FFDD00CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source constant.language.import-export-all'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source meta.import string.quoted.single',
        'source meta.import string.quoted.double',
      ],
      settings: {
        foreground: '#CCEE55CC',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source meta.import keyword.control.as',
        'source meta.import keyword.control.default',
        'source meta.import keyword.control.from',
        'source meta.import keyword.control.import',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source storage.type.internaldeclaration',
        'source storage.type.namespace',
        'source storage.type',
        'source keyword.control.from',
        'source keyword.control.import',
        'source keyword.control.export',
        'source meta.export.default keyword.control.default',
      ],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source keyword.control.as',
        'source keyword.control.default',
        'source keyword.control',
        'source keyword.control.anchor.regexp',
        'source keyword.control.conditional',
        'source keyword.control.less',
        'source keyword.control.loop',
        'source keyword.control.module',
        'source keyword.control.require',
        'source keyword.control.switch',
        'source keyword.control.trycatch',
        'source keyword.control.with',
        'source keyword',
        'source keyword.other',
        'source keyword.generator.asterisk',
        'source meta.block keyword.control.flow',
        'source keyword.operator.logical',
        'source storage.type.numeric.bigint',
      ],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source storage.type'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source meta.block meta.var.expr storage.type'],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['source punctuation.decorator'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source constant.language.boolean.false'],
      settings: {
        foreground: '#EE4433CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source constant.language.boolean.true'],
      settings: {
        foreground: '#77CC22CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source constant.language.undefined'],
      settings: {
        foreground: '#AA77BBAA',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source constant.language.null'],
      settings: {
        foreground: '#EE6677CC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: ['source support.type.builtin'],
      settings: {
        foreground: '#EE77BBBB',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source constant.language.infinity',
        'source constant.language.nan',
      ],
      settings: {
        foreground: '#77AADDCC',
        fontStyle: 'bold italic',
      },
    },
    {
      scope: [
        'source keyword.operator.arithmetic',
        'source keyword.operator.assignment.compound.bitwise',
        'source keyword.operator.assignment.compound',
        'source keyword.operator.bitwise.shift',
        'source keyword.operator.bitwise',
        'source keyword.operator.decrement',
        'source keyword.operator.increment',
        'source keyword.operator.definiteassignment',
        'source keyword.operator',
        'source keyword.operator.comparison',
        'source keyword.operator.ternary',
        'source punctuation.separator.key-value',
        'source keyword.operator.assignment',
        'source keyword.operator.type.annotation',
        'source keyword.operator.expression.delete',
        'source keyword.operator.expression.import',
        'source keyword.operator.expression.in',
        'source keyword.operator.expression.infer',
        'source keyword.operator.expression.instanceof',
        'source keyword.operator.expression.is',
        'source keyword.operator.expression.keyof',
        'source keyword.operator.expression.of',
        'source keyword.operator.expression.typeof',
        'source keyword.operator.expression.void',
        'source keyword.operator.negation.regexp',
        'source keyword.operator.optional',
        'source keyword.operator.or.regexp',
        'source keyword.operator.quantifier.regexp',
        'source keyword.operator.relational',
        'source keyword.operator.type.modifier',
        'source keyword.operator.type',
      ],
      settings: {
        foreground: '#44BB99CC',
        fontStyle: '',
      },
    },
    {
      scope: ['source keyword.operator.spread', 'source keyword.operator.rest'],
      settings: {
        foreground: '#44BB99AA',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source *link*',
        'source *uri*',
        'source *url*',
        'source case-clause.expr ',
        'source case-clause.expr',
        'source cast.expr',
        'source header',
        'source keyword.other.back-reference.regexp',
        'source keyword.other.unit',
        'source markup.changed',
        'source markup.deleted',
        'source markup.heading',
        'source markup.inline.raw',
        'source markup.inserted',
        'source markup.punctuation.list.beginning',
        'source markup.punctuation.quote.beginning',
        'source markup.underline',
        'source module.node',
        'source new.expr',
        'source prototype',
        'source punctuation.definition.binding-pattern.array',
        'source punctuation.definition.binding-pattern.object',
        'source source.embedded',
        'source switch-block.expr',
        'source switch-expression.expr',
        'source switch-statement.expr',
        'source variable.other.object',
        'source meta.object.member variable.other.object',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: [
        'source support.class',
        'source support.class.builtin',
        'source support.class.node',
        'source support.class.promise',
        'source support.constant',
        'source support.constant',
        'source support.constant.math',
        'source support.type',
        'source support.type.object.module',
        'source support.variable',
        'source support.variable.object.node',
        'source support.variable.object.process',
      ],
      settings: {
        foreground: '#E4D5ADDD',
        fontStyle: '',
      },
    },
    {
      scope: ['source emphasis', 'source markup.bold', 'source strong'],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['source markup.italic'],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'source punctuation.quasi',
        'source string.quasi',
        'source invalid',
        'source invalid.illegal',
        'source invalid.illegal.newline',
      ],
      settings: {
        foreground: '#DD2255DD',
        fontStyle: '',
      },
    },
    {
      scope: ['source invalid.deprecated'],
      settings: {
        foreground: '#DD2255BB',
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'comment.line.shebang punctuation.definition.comment',
        'source punctuation.definition.comment.shebang',
      ],
      settings: {
        foreground: '#FF115599',
        fontStyle: 'bold underline',
      },
    },
    {
      scope: [
        'source comment.line.shebang',
        'comment.line.number-sign.shebang',
        'source comment.line.number-sign.shebang',
      ],
      settings: {
        foreground: '#EEDDAA77',
        fontStyle: 'italic bold underline',
      },
    },
    {
      scope: ['comment'],
      settings: {
        foreground: '#666677',
        fontStyle: '',
      },
    },
    {
      scope: ['comment.line.double-slash'],
      settings: {
        foreground: '#44DDDDAA',
        fontStyle: '',
      },
    },
    {
      scope: ['comment.line.double-slash punctuation.definition.comment'],
      settings: {
        foreground: '#44CCDD55',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['comment.block'],
      settings: {
        foreground: '#BB44DDBB',
        fontStyle: '',
      },
    },
    {
      scope: ['comment.block punctuation.definition.comment'],
      settings: {
        foreground: '#BB44DD55',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'comment.line.triple-slash.directive punctuation.definition.comment',
      ],
      settings: {
        foreground: '#BB998855',
        fontStyle: '',
      },
    },
    {
      scope: [
        'comment.line.triple-slash.directive punctuation.definition.tag.directive',
        'comment.line.triple-slash.directive punctuation.definition.tag.directive',
        'comment.line.triple-slash.directive punctuation.definition.string',
        'comment.line.triple-slash.directive keyword.operator.assignment',
      ],
      settings: {
        foreground: '#BB998855',
        fontStyle: '',
      },
    },
    {
      scope: [
        'comment.line.triple-slash.directive meta.tag entity.name.tag.directive',
        'comment.line.triple-slash.directive entity.other.attribute-name.directive',
        'comment.line.triple-slash.directive string.quoted',
      ],
      settings: {
        foreground: '#22BBDD77',
        fontStyle: '',
      },
    },
    {
      scope: [
        'comment.line.triple-slash.directive string.quoted',
        'comment.line.triple-slash.directive string.quoted.single',
        'comment.line.triple-slash.directive string.quoted.double',
      ],
      settings: {
        foreground: '#CCEE5599',
        fontStyle: '',
      },
    },
    {
      scope: [
        'meta.tag punctuation.definition.string.begin.js',
        'meta.tag punctuation.definition.string.begin.tsx',
        'meta.tag punctuation.definition.string.end.js',
        'meta.tag punctuation.definition.string.end.tsx',
        'punctuation.accessor.optional',
        'punctuation.accessor',
        'punctuation.decorator.internaldeclaration',
        'punctuation.definition.character-class.regexp',
        'punctuation.definition.group.assertion.regexp',
        'punctuation.definition.group.no-capture.regexp',
        'punctuation.definition.group.regexp',
        'punctuation.definition.section.case-statement',
        'punctuation.definition.string',
        'punctuation.definition.string.template',
        'punctuation.definition.tag.directive',
        'punctuation.definition.typeparameters',
        'punctuation.destructuring',
        'punctuation.quoted',
        'punctuation.separator.comma',
        'punctuation.separator.label',
        'punctuation.separator.parameter',
        'punctuation.tag',
        'punctuation.whitespace.comment.leading',
        'source.json punctuation.definition.string',
        'string.quoted.double punctuation.definition.string',
        'string.quoted.single punctuation.definition.string',
        'text.html meta.tag meta.attribute punctuation.definition.string',
        'text.html source punctuation.definition.string',
        'text.html source punctuation.definition.string.template',
        'text.html source string.quoted.double punctuation.definition.string',
        'text.html source string.quoted.single punctuation.definition.string',
        'source.js punctuation.terminator.statement',
        'source.ts punctuation.terminator.statement',
        'punctuation.terminator.statement.ts',
        'punctuation.terminator.statement.js',
        'source.js.jsx punctuation.terminator.statement',
        'source.tsx punctuation.terminator.statement',
      ],
      settings: {
        foreground: '#CFC5B2DD',
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.js punctuation.definition.template-expression.begin',
        'source.js punctuation.definition.template-expression.end',
        'source.ts string.template punctuation.definition.template-expression.begin',
        'source.ts string.template punctuation.definition.template-expression.end',
        'source punctuation.definition.template-expression.begin',
        'source punctuation.definition.template-expression.end',
      ],
      settings: {
        foreground: '#EE88DDDD',
        fontStyle: '',
      },
    },
    {
      scope: [],
      settings: {
        foreground: '#4499FF',
        fontStyle: 'bold',
      },
    },
    {
      scope: ['keyword.other.debugger'],
      settings: {
        foreground: '#FFCC55CC',
        fontStyle: 'bold underline',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796E6',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#CD9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#F44747',
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#B267E6',
      },
    },
  ],
};

outsideOutCollors(colorTheme);
