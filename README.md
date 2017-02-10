# minimoog.js

minimoog.js is an emulation of the classic [Moog Minimoog Model D analog synthesizer](https://en.wikipedia.org/wiki/Minimoog).

[You can play minimoog.js here](http://bit.ly/2kslx3i).

# System Requirements

Minimum window size of 1024x768. Please use an updated version of [Google Chrome](https://www.google.com/chrome/browser/desktop/).

# How to play

minimoog.js is best played with a MIDI keyboard. See [the next section](README.md#midi) for MIDI setup instructions. Notes can also be played with a computer keyboard, or by clicking the keys with a mouse. Like the original hardware synthesizer, the minimoog.js can play up to 6 notes at a time.

Please note that due to a phenomenon known as [keyboard ghosting](http://www.microsoft.com/appliedsciences/antighostingexplained.mspx), certain simultaneous combnations of more than 2 keys will not register when held on the computer keyboard. This is a limitation of computer keyboard hardware, and not with minimoog.js.

Also note that in addition to the labeled keyboard assignments, the key mappings extend to cover the entire top and bottom row of the `QWERTY` keyboard, in order to allow for a variety of playing positions.

Click `Reset` at the top of the screen at any time to return the minimoog.js to its initial state.

When you've found a sound that you like, click on the `PATCH NAME` text at the top of the screen to edit the name of your patch. Then click `SHARE` and click the icon to copy a special URL to your clipboard. Anyone who loads that URL will load your patch.

# MIDI

For MIDI connectivity, you must use **Chrome 43** or newer.

Every control on the minimoog.js is mappable to respond to MIDI CC messages, and your MIDI mappings will be remembered when you leave the page. This means that once you've mapped the on-screen controls to your hardware controller, you can play minimoog.js without touching the mouse and keyboard. If you have multiple MIDI inputs, minimoog.js will remember all of your mappings separately. minimoog.js supports both 7-bit and 14-bit MIDI messages. Simply right-click a control to begin mapping.

Note that if you're mapping a button or switch on your controller that only sends one message at a time, you'll have to press it a few times in order for the mapping to be assigned.

# Synthesis Overview

The following is a brief description of each control on the minimoog.js. Many of these controls are also found on other analog and virtual analog synthesizers.

If you've never played with synthesizers before, the controls may seem overwhelming at first. A good entry point is to experiment with the filter cutoff (the `FREQ` knob in the `VCF` section) and the amplifier envelope (the `A`, `D`, `S`, and `R` knobs in the `ENV` section). The former alters the brightness of the sound, and the latter change the attack, decay, sustain, and release, respectively, shaping the volume of the sound over time as you press and then let go of the keys.

For more detailed instructions, consult the [Minimoog Model D user's manual](https://www.moogmusic.com/sites/default/files/Minimoog_Model_D_Users_Manual_Web.pdf).

**LFO - Low Frequency Oscillator**   
 A triangle-wave oscillator that is heard indirectly, through its effects on other parameters.

 * Rate: Controls the speed of the LFO.   
 * Delay: Controls the speed at which the LFO fades in on triggering a note.  

**DCO - Digitally Controlled Oscillator**  
 Sound sources that are heard directly.  

 * Range: Selects the keyboard octave.  
 * LFO: Selects the extent to which the LFO modulates the oscillator pitch -- i.e., adjusts the depth of vibrato.
 * PWM: In manual mode, sets the width of the pulse wave, between 5% and 95%. In LFO mode,  
 selects the extent to which the LFO modulates pulse width.  
 * PULSE/SAW: Toggles pulse and sawtooth waveforms.  
 * SUB: Sets volume of square-wave sub-oscillator, one octave below main oscillator.  
 * NOISE: Sets volume of noise generator.  

**VCF - Voltage Controlled Filter**  
 24 dB/octave resonant lowpass filter

* FREQ: Sets filter cutoff. Higher values let more high frequencies pass through, for a brighter sound.  
* RES: Controls resonance, which is a gain increase at the point of the filter cutoff.  
* NORM/INV: Whether or not to invert the filter.  
* ENV: The extent to which the envelope is applied to the filter cutoff.  
* LFO: The extent to which the LFO is applied to the filter cutoff.  
* KBD: The extent to which the filter cutoff tracks the keyboard pitch.  

**HPF - High Pass Filter**  
 12 dB/octave non-resonant highpass filter

* FREQ: Set the level higher to filter out more low-frequency content.

**VCA - Voltage Controlled Amplifier**  
 Controls the overall volume level.

* ENV/GATE: In ENV mode, the volume will be shaped by the envelope. In GATE mode, notes will instantly turn on and off when keys are pressed and released. Note that in GATE mode, the ENV can still be applied to the filter cutoff.  
* LEVEL: Overall volume.

**ENV - Envelope**    
 Envelope shared by both the amplifier and filter.

* A: Attack - how quickly the volume/filter rises to its maximum level when a note is triggered.  
* D: Decay - after reaching its maximum level, how quickly the volume/filter falls back down to the sustain level.  
* S: Sustain - the level at which the volume/filter maintains itself while a note is held.  
* R: Release - how long the volume/filter takes to fade out once a note is released.  

**CHORUS**    
 A chorus effect.

* OFF: No effect.  
* I: Moderate chorus effect.  
* II: Stronger chorus effect.

# Technology

minimoog.js was written in Javascript using the [WebAudio](http://webaudio.github.io/web-audio-api/) and [Web MIDI](http://www.w3.org/TR/webmidi/) APIs as well as [Backbone.Marionette](marionettejs.com). It also uses some effects from [tuna.js](https://github.com/Dinahmoe/tuna) by Dinahmoe.

# TO-DO

* Knobs instead of sliders
* 3d model
* Install, run, and build notes

# Changelog

* v. 1.0: First public release - 5/18/2015
* v 1.1: Naming and sharing of user patches - 5/21/2015
* v 1.2: MIDI CC mapping - 5/31/2015

# Install
`npm install`

Make sure you have Ruby and SASS installed:
`gem install sass`

# Run
`http-server`

# Build
`grunt`
