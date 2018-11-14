Blockly.Blocks['spider.forward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_FORWARD_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(Blockly.Msg.SPIDER_FORWARD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPIDER_FORWARD_HELPURL);
    }
};


Blockly.Blocks['spider.backward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_BACKWARD_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(Blockly.Msg.SPIDER_BACKWARD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPIDER_BACKWARD_HELPURL);
    }
};

Blockly.Blocks['spider.trun_left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_TURN_LEFT_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(Blockly.Msg.SPIDER_TURN_LEFT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPIDER_TURN_LEFT_HELPURL);
    }
};

Blockly.Blocks['spider.trun_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_TURN_RIGHT_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(Blockly.Msg.SPIDER_TURN_RIGHT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPIDER_TURN_RIGHT_HELPURL);
    }
};

Blockly.Blocks['spider.dance'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_DANCE_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(Blockly.Msg.SPIDER_DANCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPIDER_DANCE_HELPURL);
    }
};

Blockly.Blocks['spider.greeting'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_GREETING_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(Blockly.Msg.SPIDER_GREETING_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPIDER_GREETING_HELPURL);
    }
};
