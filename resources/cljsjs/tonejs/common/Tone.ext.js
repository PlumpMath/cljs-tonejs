/*Basic stuff*/
var Tone;
Tone.prototype.Event = function() {};
Tone.Event.prototype.start = function() {};
Tone.Event.prototype.stop = function() {};
Tone.Event.prototype.cancel = function() {};
Tone.Event.prototype.dispose = function() {};

Tone.prototype.Loop = function() {};
Tone.Loop.prototype.start = function() {};
Tone.Loop.prototype.stop = function() {};
Tone.Loop.prototype.cancel = function() {};
Tone.Loop.prototype.dispose = function() {};

Tone.prototype.Part = function() {};
Tone.Part.prototype.start = function() {};
Tone.Part.prototype.stop = function() {};
Tone.Part.prototype.at = function() {};
Tone.Part.prototype.add = function() {};
Tone.Part.prototype.remove = function() {};
Tone.Part.prototype.removeAll = function() {};
Tone.Part.prototype.cancel = function() {};
Tone.Part.prototype.dispose = function() {};

Tone.prototype.Pattern = function() {};
Tone.Pattern.prototype.start = function() {};
Tone.Pattern.prototype.stop = function() {};
Tone.Pattern.prototype.cancel = function() {};
Tone.Pattern.prototype.dispose = function() {};

Tone.prototype.Sequence = function() {};
Tone.Sequence.prototype.at = function() {};
Tone.Sequence.prototype.add = function() {};
Tone.Sequence.prototype.remove = function() {};
Tone.Sequence.prototype.dispose = function() {};
Tone.Sequence.prototype.start = function() {};
Tone.Sequence.prototype.stop = function() {};
Tone.Sequence.prototype.removeAll = function() {};
Tone.Sequence.prototype.cancel = function() {};

/* Instruments */
Tone.prototype.AMSynth = function() {};
Tone.AMSynth.prototype.dispose = function() {};
Tone.AMSynth.prototype.triggerAttack = function() {};
Tone.AMSynth.prototype.triggerRelease = function() {};
Tone.AMSynth.prototype.setNote = function() {};
Tone.AMSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.DuoSynth = function() {};
Tone.DuoSynth.prototype.dispose = function() {};
Tone.DuoSynth.prototype.triggerAttack = function() {};
Tone.DuoSynth.prototype.triggerRelease = function() {};
Tone.DuoSynth.prototype.setNote = function() {};
Tone.DuoSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.FMSynth = function() {};
Tone.FMSynth.prototype.dispose = function() {};
Tone.FMSynth.prototype.triggerAttack = function() {};
Tone.FMSynth.prototype.triggerRelease = function() {};
Tone.FMSynth.prototype.setNote = function() {};
Tone.FMSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.Instrument = function() {};
Tone.Instrument.prototype.dispose = function() {};
Tone.Instrument.prototype.triggerAttackRelease = function() {};

Tone.prototype.MembraneSynth = function() {};
Tone.MembraneSynth.prototype.dispose = function() {};
Tone.MembraneSynth.prototype.triggerAttack = function() {};
Tone.MembraneSynth.prototype.triggerRelease = function() {};
Tone.MembraneSynth.prototype.setNote = function() {};
Tone.MembraneSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.MetalSynth = function() {};
Tone.MetalSynth.prototype.dispose = function() {};
Tone.MetalSynth.prototype.triggerAttack = function() {};
Tone.MetalSynth.prototype.triggerRelease = function() {};
Tone.MetalSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.MonoSynth = function() {};
Tone.MonoSynth.prototype.dispose = function() {};
Tone.MonoSynth.prototype.triggerAttack = function() {};
Tone.MonoSynth.prototype.triggerRelease = function() {};
Tone.MonoSynth.prototype.setNote = function() {};
Tone.MonoSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.Monophonic = function() {};
Tone.Monophonic.prototype.dispose = function() {};
Tone.Monophonic.prototype.triggerAttack = function() {};
Tone.Monophonic.prototype.triggerRelease = function() {};
Tone.Monophonic.prototype.setNote = function() {};
Tone.Monophonic.prototype.triggerAttackRelease = function() {};

Tone.prototype.NoiseSynth = function() {};
Tone.NoiseSynth.prototype.dispose = function() {};
Tone.NoiseSynth.prototype.triggerAttack = function() {};
Tone.NoiseSynth.prototype.triggerRelease = function() {};
Tone.NoiseSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.PluckSynth = function() {};
Tone.PluckSynth.prototype.dispose = function() {};
Tone.PluckSynth.prototype.triggerAttack = function() {};
Tone.PluckSynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.PolySynth = function() {};
Tone.PolySynth.prototype.dispose = function() {};
Tone.PolySynth.prototype.triggerAttack = function() {};
Tone.PolySynth.prototype.triggerRelease = function() {};
Tone.PolySynth.prototype.get = function() {};
Tone.PolySynth.prototype.set = function() {};
Tone.PolySynth.prototype.releaseAll = function() {};
Tone.PolySynth.prototype.triggerAttackRelease = function() {};

Tone.prototype.Sampler = function() {};
Tone.Sampler.prototype.dispose = function() {};
Tone.Sampler.prototype.triggerAttack = function() {};
Tone.Sampler.prototype.triggerRelease = function() {};
Tone.Sampler.prototype.triggerAttackRelease = function() {};

Tone.prototype.Synth = function() {};
Tone.Synth.prototype.dispose = function() {};
Tone.Synth.prototype.triggerAttack = function() {};
Tone.Synth.prototype.triggerRelease = function() {};
Tone.Synth.prototype.setNote = function() {};
Tone.Synth.prototype.triggerAttackRelease = function() {};

/*Effects*/
Tone.prototype.AutoFilter = function() {};
Tone.AutoFilter.prototype.start = function() {};
Tone.AutoFilter.prototype.stop = function() {};
Tone.AutoFilter.prototype.sync = function() {};
Tone.AutoFilter.prototype.unsync = function() {};
Tone.AutoFilter.prototype.dispose = function() {};

Tone.prototype.AutoPanner = function() {};
Tone.AutoPanner.prototype.start = function() {};
Tone.AutoPanner.prototype.stop = function() {};
Tone.AutoPanner.prototype.sync = function() {};
Tone.AutoPanner.prototype.unsync = function() {};
Tone.AutoPanner.prototype.dispose = function() {};

Tone.prototype.AutoWah = function() {};
Tone.AutoWah.prototype.dispose = function() {};

Tone.prototype.BitCrusher = function() {};
Tone.BitCrusher.prototype.dispose = function() {};

Tone.prototype.Chebyshev = function() {};
Tone.Chebyshev.prototype.dispose = function() {};

Tone.prototype.Chorus = function() {};
Tone.Chorus.prototype.dispose = function() {};

Tone.prototype.Convolver = function() {};
Tone.Convolver.prototype.load = function() {};
Tone.Convolver.prototype.dispose = function() {};

Tone.prototype.Distortion = function() {};
Tone.Distortion.prototype.dispose = function() {};

Tone.prototype.Effect = function() {};
Tone.Effect.prototype.dispose = function() {};

Tone.prototype.FeedbackDelay = function() {};
Tone.FeedbackDelay.prototype.dispose = function() {};

Tone.prototype.FeedbackEffect = function() {};
Tone.FeedbackEffect.prototype.dispose = function() {};

Tone.prototype.Freeverb = function() {};
Tone.Freeverb.prototype.dispose = function() {};

Tone.prototype.JCReverb = function() {};
Tone.JCReverb.prototype.dispose = function() {};

Tone.prototype.MidiSideEffect = function() {};
Tone.MidiSideEffect.prototype.dispose = function() {};

Tone.prototype.Phaser = function() {};
Tone.Phaser.prototype.dispose = function() {};

Tone.prototype.PingPongDelay = function() {};
Tone.PingPongDelay.prototype.dispose = function() {};

Tone.prototype.FeedbackEffect = function() {};
Tone.FeedbackEffect.prototype.dispose = function() {};

Tone.prototype.StereoEffect = function() {};
Tone.StereoEffect.prototype.dispose = function() {};

Tone.prototype.StereoFeedbackEffect = function() {};
Tone.StereoFeedbackEffect.prototype.dispose = function() {};

Tone.prototype.StereoWidener = function() {};
Tone.StereoWidener.prototype.dispose = function() {};

Tone.prototype.StereoXFeedbackEffect = function() {};
Tone.StereoXFeedbackEffect.prototype.dispose = function() {};

Tone.prototype.Tremolo = function() {};
Tone.Tremolo.prototype.start = function() {};
Tone.Tremolo.prototype.stop = function() {};
Tone.Tremolo.prototype.sync = function() {};
Tone.Tremolo.prototype.unsync = function() {};
Tone.Tremolo.prototype.dispose = function() {};

Tone.prototype.Vibrato = function() {};
Tone.Vibrato.prototype.dispose = function() {};

/*Source*/
Tone.prototype.AMOscillator = function() {};
Tone.AMOscillator.prototype.start = function() {};
Tone.AMOscillator.prototype.stop = function() {};
Tone.AMOscillator.prototype.syncFrequency = function() {};
Tone.AMOscillator.prototype.sync = function() {};
Tone.AMOscillator.prototype.unsync = function() {};
Tone.AMOscillator.prototype.unsyncFrequency = function() {};
Tone.AMOscillator.prototype.dispose = function() {};

Tone.prototype.BufferSource = function() {};
Tone.BufferSource.prototype.start = function() {};
Tone.BufferSource.prototype.stop = function() {};
Tone.BufferSource.prototype.dispose = function() {};

Tone.prototype.ExternalInput = function() {};
Tone.ExternalInput.prototype.start = function() {};
Tone.ExternalInput.prototype.stop = function() {};
Tone.ExternalInput.prototype.sync = function() {};
Tone.ExternalInput.prototype.unsync = function() {};
Tone.ExternalInput.prototype.dispose = function() {};

Tone.prototype.FMOscillator = function() {};
Tone.FMOscillator.prototype.start = function() {};
Tone.FMOscillator.prototype.stop = function() {};
Tone.FMOscillator.prototype.syncFrequency = function() {};
Tone.FMOscillator.prototype.sync = function() {};
Tone.FMOscillator.prototype.unsync = function() {};
Tone.FMOscillator.prototype.unsyncFrequency = function() {};
Tone.FMOscillator.prototype.dispose = function() {};

Tone.prototype.FatOscillator = function() {};
Tone.FatOscillator.prototype.start = function() {};
Tone.FatOscillator.prototype.stop = function() {};
Tone.FatOscillator.prototype.syncFrequency = function() {};
Tone.FatOscillator.prototype.sync = function() {};
Tone.FatOscillator.prototype.unsync = function() {};
Tone.FatOscillator.prototype.unsyncFrequency = function() {};
Tone.FatOscillator.prototype.dispose = function() {};

Tone.prototype.GrainPlayer = function() {};
Tone.GrainPlayer.prototype.scrub = function() {};
Tone.GrainPlayer.prototype.dispose = function() {};

Tone.prototype.Microphone = function() {};
Tone.Microphone.prototype.open = function() {};
Tone.Microphone.prototype.close = function() {};
Tone.Microphone.prototype.start = function() {};
Tone.Microphone.prototype.stop = function() {};
Tone.Microphone.prototype.sync = function() {};
Tone.Microphone.prototype.unsync = function() {};
Tone.Microphone.prototype.dispose = function() {};

Tone.prototype.MultiPlayer = function() {};
Tone.MultiPlayer.prototype.start = function() {};
Tone.MultiPlayer.prototype.startLoop = function() {};
Tone.MultiPlayer.prototype.stop = function() {};
Tone.MultiPlayer.prototype.stopAll = function() {};
Tone.MultiPlayer.prototype.add = function() {};
Tone.MultiPlayer.prototype.dispose = function() {};

Tone.prototype.Noise = function() {};
Tone.Noise.prototype.set = function() {};
Tone.Noise.prototype.syncFrequency = function() {};
Tone.Noise.prototype.unsyncFrequency = function() {};
Tone.Noise.prototype.start = function() {};
Tone.Noise.prototype.stop = function() {};
Tone.Noise.prototype.sync = function() {};
Tone.Noise.prototype.unsync = function() {};
Tone.Noise.prototype.dispose = function() {};
Tone.Noise.prototype.dispose = function() {};

Tone.prototype.OmniOscillator = function() {};
Tone.OmniOscillator.prototype.syncFrequency = function() {};
Tone.OmniOscillator.prototype.unsyncFrequency = function() {};
Tone.OmniOscillator.prototype.start = function() {};
Tone.OmniOscillator.prototype.stop = function() {};
Tone.OmniOscillator.prototype.sync = function() {};
Tone.OmniOscillator.prototype.unsync = function() {};
Tone.OmniOscillator.prototype.dispose = function() {};

Tone.prototype.Oscillator = function() {};
Tone.Oscillator.prototype.syncFrequency = function() {};
Tone.Oscillator.prototype.unsyncFrequency = function() {};
Tone.Oscillator.prototype.start = function() {};
Tone.Oscillator.prototype.stop = function() {};
Tone.Oscillator.prototype.sync = function() {};
Tone.Oscillator.prototype.unsync = function() {};
Tone.Oscillator.prototype.dispose = function() {};

Tone.prototype.PWMOscillator = function() {};
Tone.PWMOscillator.prototype.syncFrequency = function() {};
Tone.PWMOscillator.prototype.unsyncFrequency = function() {};
Tone.PWMOscillator.prototype.start = function() {};
Tone.PWMOscillator.prototype.stop = function() {};
Tone.PWMOscillator.prototype.sync = function() {};
Tone.PWMOscillator.prototype.unsync = function() {};
Tone.PWMOscillator.prototype.dispose = function() {};

Tone.prototype.Player = function() {};
Tone.Player.prototype.load = function() {};
Tone.Player.prototype.start = function() {};
Tone.Player.prototype.seek = function() {};
Tone.Player.prototype.setLoopPoints = function() {};
Tone.Player.prototype.stop = function() {};
Tone.Player.prototype.sync = function() {};
Tone.Player.prototype.unsync = function() {};
Tone.Player.prototype.dispose = function() {};

Tone.prototype.PulseOscillator = function() {};
Tone.PulseOscillator.prototype.syncFrequency = function() {};
Tone.PulseOscillator.prototype.unsyncFrequency = function() {};
Tone.PulseOscillator.prototype.start = function() {};
Tone.PulseOscillator.prototype.stop = function() {};
Tone.PulseOscillator.prototype.sync = function() {};
Tone.PulseOscillator.prototype.unsync = function() {};
Tone.PulseOscillator.prototype.dispose = function() {};

Tone.prototype.Source = function() {};
Tone.Source.prototype.start = function() {};
Tone.Source.prototype.stop = function() {};
Tone.Source.prototype.sync = function() {};
Tone.Source.prototype.unsync = function() {};
Tone.Source.prototype.dispose = function() {};

/*Core*/
Tone.prototype.Buffer = function() {};
Tone.Buffer.prototype.set = function() {};
Tone.Buffer.prototype.get = function() {};
Tone.Buffer.prototype.load = function() {};
Tone.Buffer.prototype.dispose = function() {};
Tone.Buffer.prototype.fromArray = function() {};
Tone.Buffer.prototype.toArray = function() {};
Tone.Buffer.prototype.slice = function() {};
Tone.Buffer.prototype.supportsType = function() {};

Tone.prototype.Buffers = function() {};
Tone.Buffers.prototype.has = function() {};
Tone.Buffers.prototype.get = function() {};
Tone.Buffers.prototype.add = function() {};
Tone.Buffers.prototype.dispose = function() {};

Tone.prototype.Clock = function() {};
Tone.Clock.prototype.start = function() {};
Tone.Clock.prototype.stop = function() {};
Tone.Clock.prototype.pause = function() {};
Tone.Clock.prototype.getStateAtTime = function() {};
Tone.Clock.prototype.on = function() {};
Tone.Clock.prototype.off = function() {};
Tone.Clock.prototype.emit = function() {};
Tone.Clock.prototype.dispose = function() {};

Tone.prototype.Delay = function() {};
Tone.Delay.prototype.dispose = function() {};

Tone.prototype.Emitter = function() {};
Tone.Emitter.prototype.on = function() {};
Tone.Emitter.prototype.off = function() {};
Tone.Emitter.prototype.emit = function() {};
Tone.Emitter.prototype.mixin = function() {};
Tone.Emitter.prototype.dispose = function() {};

Tone.prototype.Gain = function() {};
Tone.Gain.prototype.dispose = function() {};

Tone.prototype.IntervalTimeline = function() {};
Tone.IntervalTimeline.prototype.addEvent = function() {};
Tone.IntervalTimeline.prototype.removeEvent = function() {};
Tone.IntervalTimeline.prototype.cancel = function() {};
Tone.IntervalTimeline.prototype.getEvent = function() {};
Tone.IntervalTimeline.prototype.forEach = function() {};
Tone.IntervalTimeline.prototype.forEachAtTime = function() {};
Tone.IntervalTimeline.prototype.forEachAfter = function() {};
Tone.IntervalTimeline.prototype.dispose = function() {};

Tone.prototype.Listener = function() {};
Tone.Listener.prototype.setPosition = function() {};
Tone.Listener.prototype.setOrientation = function() {};
Tone.Listener.prototype.dispose = function() {};

Tone.prototype.Master = function() {};
Tone.Master.prototype.chain = function() {};
Tone.Master.prototype.dispose = function() {};

Tone.prototype.Param = function() {};
Tone.Param.prototype.setValueAtTime = function() {};
Tone.Param.prototype.setRampPoint = function() {};
Tone.Param.prototype.linearRampToValueAtTime = function() {};
Tone.Param.prototype.exponentialRampToValueAtTime = function() {};
Tone.Param.prototype.exponentialRampToValue = function() {};
Tone.Param.prototype.linearRampToValue = function() {};
Tone.Param.prototype.setTargetAtTime = function() {};
Tone.Param.prototype.setValueCurveAtTime = function() {};
Tone.Param.prototype.cancelScheduledValues = function() {};
Tone.Param.prototype.rampTo = function() {};
Tone.Param.prototype.dispose = function() {};

Tone.prototype.Timeline = function() {};
Tone.Timeline.prototype.addEvent = function() {};
Tone.Timeline.prototype.removeEvent = function() {};
Tone.Timeline.prototype.getEvent = function() {};
Tone.Timeline.prototype.removeEvent = function() {};
Tone.Timeline.prototype.getEventAfter = function() {};
Tone.Timeline.prototype.getEventBefore = function() {};
Tone.Timeline.prototype.cancel = function() {};
Tone.Timeline.prototype.cancelBefore = function() {};
Tone.Timeline.prototype.forEach = function() {};
Tone.Timeline.prototype.forEachBefore = function() {};
Tone.Timeline.prototype.forEachAfter = function() {};
Tone.Timeline.prototype.forEachFrom = function() {};
Tone.Timeline.prototype.forEachAtTime = function() {};
Tone.Timeline.prototype.dispose = function() {};

Tone.prototype.TimelineState = function() {};
Tone.TimelineState.prototype.getStateAtTime = function() {};
Tone.TimelineState.prototype.setStateAtTime = function() {};
Tone.TimelineState.prototype.addEvent = function() {};
Tone.TimelineState.prototype.removeEvent = function() {};
Tone.TimelineState.prototype.getEvent = function() {};
Tone.TimelineState.prototype.getEventAfter = function() {};
Tone.TimelineState.prototype.getEventBefore = function() {};
Tone.TimelineState.prototype.cancel = function() {};
Tone.TimelineState.prototype.cancelBefore = function() {};
Tone.TimelineState.prototype.forEach = function() {};
Tone.TimelineState.prototype.forEachBefore = function() {};
Tone.TimelineState.prototype.forEachAfter = function() {};
Tone.TimelineState.prototype.forEachFrom = function() {};
Tone.TimelineState.prototype.forEachAtTime = function() {};
Tone.TimelineState.prototype.dispose = function() {};

Tone.prototype.Tone = function() {};
Tone.Tone.prototype.send = function() {};
Tone.Tone.prototype.receive = function() {};
Tone.Tone.prototype.createInsOuts = function() {};
Tone.Tone.prototype.toMaster = function() {};
Tone.Tone.prototype.set = function() {};
Tone.Tone.prototype.get = function() {};
Tone.Tone.prototype.toString = function() {};
Tone.Tone.prototype.noGC = function() {};
Tone.Tone.prototype.connect = function() {};
Tone.Tone.prototype.disconnect = function() {};
Tone.Tone.prototype.connectSeries = function() {};
Tone.Tone.prototype.chain = function() {};
Tone.Tone.prototype.fan = function() {};
Tone.Tone.prototype.defaultArg = function() {};
Tone.Tone.prototype.optionsObject = function() {};
Tone.Tone.prototype.isUndef = function() {};
Tone.Tone.prototype.isFunction = function() {};
Tone.Tone.prototype.isNumber = function() {};
Tone.Tone.prototype.isObject = function() {};
Tone.Tone.prototype.isBoolean = function() {};
Tone.Tone.prototype.isArray = function() {};
Tone.Tone.prototype.isString = function() {};
Tone.Tone.prototype.noOp = function() {};
Tone.Tone.prototype.equalPowerScale = function() {};
Tone.Tone.prototype.dbToGain = function() {};
Tone.Tone.prototype.gainToDb = function() {};
Tone.Tone.prototype.intervalToFrequencyRatio = function() {};
Tone.Tone.prototype.now = function() {};
Tone.Tone.prototype.extend = function() {};
Tone.Tone.prototype.setContext = function() {};
Tone.Tone.prototype.toSeconds = function() {};
Tone.Tone.prototype.toFrequency = function() {};
Tone.Tone.prototype.toTicks = function() {};
Tone.Tone.prototype.dispose = function() {};

Tone.prototype.Transport = function() {};
Tone.Transport.prototype.schedule = function() {};
Tone.Transport.prototype.scheduleRepeat = function() {};
Tone.Transport.prototype.scheduleOnce = function() {};
Tone.Transport.prototype.clear = function() {};
Tone.Transport.prototype.cancel = function() {};
Tone.Transport.prototype._bindClockEvents = function() {};
Tone.Transport.prototype.start = function() {};
Tone.Transport.prototype.stop = function() {};
Tone.Transport.prototype.pause = function() {};
Tone.Transport.prototype.setLoopPoints = function() {};
Tone.Transport.prototype.nextSubdivision = function() {};
Tone.Transport.prototype.syncSignal = function() {};
Tone.Transport.prototype.unsyncSignal = function() {};
Tone.Transport.prototype.on = function() {};
Tone.Transport.prototype.off = function() {};
Tone.Transport.prototype.emit = function() {};

/*Types*/
Tone.prototype.Frequency = function() {
Tone.Frequency.prototype.transpose = function() {};
Tone.Frequency.prototype.harmonize = function() {};
Tone.Frequency.prototype.toMidi = function() {};
Tone.Frequency.prototype.toNote = function() {};
Tone.Frequency.prototype.toSeconds = function() {};
Tone.Frequency.prototype.toFrequency = function() {};
Tone.Frequency.prototype.toTicks = function() {};
Tone.Frequency.prototype.midiToFrequency = function() {};
Tone.Frequency.prototype.frequencyToMidi = function() {};
Tone.Frequency.prototype.set = function() {};
Tone.Frequency.prototype.copy = function() {};
Tone.Frequency.prototype.clone = function() {};
Tone.Frequency.prototype.add = function() {};
Tone.Frequency.prototype.sub = function() {};
Tone.Frequency.prototype.mult = function() {};
Tone.Frequency.prototype.div = function() {};
Tone.Frequency.prototype.eval = function() {};
Tone.Frequency.prototype.dispose = function() {};

Tone.prototype.Time = function() {};
Tone.Time.prototype.quantize = function() {};
Tone.Time.prototype.addNow = function() {};
Tone.Time.prototype.copy = function() {};
Tone.Time.prototype.toNotation = function() {};
Tone.Time.prototype.toBarsBeatsSixteenths = function() {};
Tone.Time.prototype.toTicks = function() {};
Tone.Time.prototype.toSamples = function() {};
Tone.Time.prototype.toFrequency = function() {};
Tone.Time.prototype.toSeconds = function() {};
Tone.Time.prototype.toMilliseconds = function() {};
Tone.Time.prototype.eval = function() {};
Tone.Time.prototype.set = function() {};
Tone.Time.prototype.clone = function() {};
Tone.Time.prototype.add = function() {};
Tone.Time.prototype.sub = function() {};
Tone.Time.prototype.mult = function() {};
Tone.Time.prototype.div = function() {};
Tone.Time.prototype.dispose = function() {};

Tone.prototype.TimeBase = function() {};
Tone.TimeBase.prototype.set = function() {};
Tone.TimeBase.prototype.clone = function() {};
Tone.TimeBase.prototype.copy = function() {};
Tone.TimeBase.prototype.add = function() {};
Tone.TimeBase.prototype.sub = function() {};
Tone.TimeBase.prototype.mult = function() {};
Tone.TimeBase.prototype.div = function() {};
Tone.TimeBase.prototype.eval = function() {};
Tone.TimeBase.prototype.dispose = function() {};

Tone.TransportTime = function() {};
Tone.TransportTime.prototype.eval = function() {};
Tone.TransportTime.prototype.toTicks = function() {};
Tone.TransportTime.prototype.toSeconds = function() {};
Tone.TransportTime.prototype.toFrequency = function() {};
Tone.TransportTime.prototype.quantize = function() {};
Tone.TransportTime.prototype.addNow = function() {};
Tone.TransportTime.prototype.copy = function() {};
Tone.TransportTime.prototype.toNotation = function() {};
Tone.TransportTime.prototype.toBarsBeatsSixteenths = function() {};
Tone.TransportTime.prototype.toSamples = function() {};
Tone.TransportTime.prototype.toMilliseconds = function() {};
Tone.TransportTime.prototype.set = function() {};
Tone.TransportTime.prototype.clone = function() {};
Tone.TransportTime.prototype.add = function() {};
Tone.TransportTime.prototype.sub = function() {};
Tone.TransportTime.prototype.mult = function() {};
Tone.TransportTime.prototype.toSeconds = function() {};
Tone.TransportTime.prototype.div = function() {};
Tone.TransportTime.prototype.dispose = function() {};

Tone.prototype.AmplitudeEnvelope = function() {};
Tone.prototype.Analyser = function() {};
Tone.Analyser.prototype.analyse = function() {};
Tone.Analyser.prototype.dispose = function() {};

Tone.prototype.Compressor = function() {};
Tone.Compressor.prototype.dispose = function() {};

Tone.prototype.CrossFade = function() {};
Tone.CrossFade.prototype.dispose = function() {};

Tone.prototype.EQ3 = function() {};
Tone.EQ3.prototype.dispose = function() {};

Tone.prototype.Envelope = function() {};
Tone.Envelope.prototype.triggerAttack = function() {};
Tone.Envelope.prototype.triggerRelease = function() {};
Tone.Envelope.prototype.getValueAtTime = function() {};
Tone.Envelope.prototype.triggerAttackRelease = function() {};
Tone.Envelope.prototype.cancel = function() {};
Tone.Envelope.prototype.dispose = function() {};

Tone.prototype.FeedbackCombFilter = function() {};
Tone.FeedbackCombFilter.prototype.dispose = function() {};

Tone.prototype.Filter = function() {};
Tone.Filter.prototype.dispose = function() {};

Tone.prototype.Follower = function() {};
Tone.Follower.prototype.connect = function() {};
Tone.Follower.prototype.dispose = function() {};

Tone.prototype.FrequencyEnvelope = function() {};
Tone.FrequencyEnvelope.prototype.dispose = function() {};
Tone.FrequencyEnvelope.prototype.triggerAttack = function() {};
Tone.FrequencyEnvelope.prototype.triggerRelease = function() {};
Tone.FrequencyEnvelope.prototype.getValueAtTime = function() {};
Tone.FrequencyEnvelope.prototype.triggerAttackRelease = function() {};
Tone.FrequencyEnvelope.prototype.cancel = function() {};

Tone.prototype.Gate = function() {};
Tone.Gate.prototype.dispose = function() {};

Tone.prototype.LFO = function() {};
Tone.LFO.prototype.start = function() {};
Tone.LFO.prototype.stop = function() {};
Tone.LFO.prototype.sync = function() {};
Tone.LFO.prototype.unsync = function() {};
Tone.LFO.prototype.dispose = function() {};
Tone.LFO.prototype.syncFrequency = function() {};
Tone.LFO.prototype.unsyncFrequency = function() {};

Tone.prototype.Limiter = function() {};
Tone.Limiter.prototype.dispose = function() {};

Tone.prototype.LowpassCombFilter = function() {};
Tone.LowpassCombFilter.prototype.dispose = function() {};

Tone.prototype.Merge = function() {};
Tone.Merge.prototype.dispose = function() {};

Tone.prototype.Meter = function() {};
Tone.Meter.prototype.dispose = function() {};

Tone.prototype.MidSideCompressor = function() {};
Tone.MidSideCompressor.prototype.dispose = function() {};

Tone.prototype.MidSideMerge = function() {};
Tone.MidSideMerge.prototype.dispose = function() {};

Tone.prototype.MidSideSplit = function() {};
Tone.MidSideSplit.prototype.dispose = function() {};

Tone.prototype.Mono = function() {};
Tone.Mono.prototype.dispose = function() {};

Tone.prototype.MultibandCompressor = function() {};
Tone.MultibandCompressor.prototype.dispose = function() {};

Tone.prototype.MultibandSplit = function() {};
Tone.MultibandSplit.prototype.dispose = function() {};

Tone.prototype.PanVol = function() {};
Tone.PanVol.prototype.dispose = function() {};

Tone.prototype.Panner = function() {};
Tone.Panner.prototype.dispose = function() {};

Tone.prototype.Panner3D = function() {};
Tone.Panner3D.prototype.setPosition = function() {};
Tone.Panner3D.prototype.setOrientation = function() {};
Tone.Panner3D.prototype.dispose = function() {};

Tone.prototype.ScaledEnvelope = function() {};
Tone.ScaledEnvelope.prototype.triggerAttack = function() {};
Tone.ScaledEnvelope.prototype.triggerRelease = function() {};
Tone.ScaledEnvelope.prototype.getValueAtTime = function() {};
Tone.ScaledEnvelope.prototype.triggerAttackRelease = function() {};
Tone.ScaledEnvelope.prototype.cancel = function() {};
Tone.ScaledEnvelope.prototype.dispose = function() {};

Tone.prototype.Split = function() {};
Tone.Split.prototype.dispose = function() {};

Tone.prototype.Volume = function() {};
Tone.Volume.prototype.dispose = function() {};

/* Signal */
Tone.prototype.SignalBase = function() {};
Tone.SignalBase.prototype.dispose = function() {};

Tone.prototype.Signal = function() {};
Tone.Signal.prototype.setValueAtTime = function() {};
Tone.Signal.prototype.setRampPoint = function() {};
Tone.Signal.prototype.linearRampToValueAtTime = function() {};
Tone.Signal.prototype.exponentialRampToValueAtTime = function() {};
Tone.Signal.prototype.exponentialRampToValue = function() {};
Tone.Signal.prototype.linearRampToValue = function() {};
Tone.Signal.prototype.setTargetAtTime = function() {};
Tone.Signal.prototype.setValueCurveAtTime = function() {};
Tone.Signal.prototype.cancelScheduledValues = function() {};
Tone.Signal.prototype.rampTo = function() {};
Tone.Signal.prototype.dispose = function() {};

Tone.prototype.AudioToGain = function() {};
Tone.AudioToGain.prototype.dispose = function() {};

Tone.prototype.AudioToGain = function() {};
Tone.AudioToGain.prototype.dispose = function() {};

Tone.prototype.EqualPowerGain = function() {};
Tone.EqualPowerGain.prototype.dispose = function() {};

Tone.prototype.EqualPowerGain = function() {};
Tone.EqualPowerGain.prototype.dispose = function() {};

Tone.prototype.Expr = function() {};
Tone.Expr.prototype.dispose = function() {};

Tone.prototype.GainToAudio = function() {};
Tone.GainToAudio.prototype.dispose = function() {};

Tone.prototype.GreaterThan = function() {};
Tone.GreaterThan.prototype.setValueAtTime = function() {};
Tone.GreaterThan.prototype.setRampPoint = function() {};
Tone.GreaterThan.prototype.linearRampToValueAtTime = function() {};
Tone.GreaterThan.prototype.exponentialRampToValueAtTime = function() {};
Tone.GreaterThan.prototype.exponentialRampToValue = function() {};
Tone.GreaterThan.prototype.linearRampToValue = function() {};
Tone.GreaterThan.prototype.setTargetAtTime = function() {};
Tone.GreaterThan.prototype.setValueCurveAtTime = function() {};
Tone.GreaterThan.prototype.cancelScheduledValues = function() {};
Tone.GreaterThan.prototype.rampTo = function() {};
Tone.GreaterThan.prototype.dispose = function() {};

Tone.prototype.GreaterThanZero = function() {};
Tone.GreaterThanZero.prototype.dispose = function() {};

Tone.prototype.Modulo = function() {};
Tone.Modulo.prototype.dispose = function() {};

Tone.prototype.Multiply = function() {};
Tone.Multiply.prototype.setValueAtTime = function() {};
Tone.Multiply.prototype.setRampPoint = function() {};
Tone.Multiply.prototype.linearRampToValueAtTime = function() {};
Tone.Multiply.prototype.exponentialRampToValueAtTime = function() {};
Tone.Multiply.prototype.exponentialRampToValue = function() {};
Tone.Multiply.prototype.linearRampToValueAtTime = function() {};
Tone.Multiply.prototype.setTargetAtTime = function() {};
Tone.Multiply.prototype.setValueCurveAtTime = function() {};
Tone.Multiply.prototype.cancelScheduledValues = function() {};
Tone.Multiply.prototype.rampTo = function() {};
Tone.Multiply.prototype.dispose = function() {};

Tone.prototype.Negate = function() {};
Tone.Negate.prototype.dispose = function() {};

Tone.prototype.Normalize = function() {};
Tone.Normalize.prototype.dispose = function() {};

Tone.prototype.Pow = function() {};
Tone.Pow.prototype.dispose = function() {};

Tone.prototype.Scale = function() {};
Tone.Scale.prototype.dispose = function() {};

Tone.prototype.ScaleExp = function() {};
Tone.ScaleExp.prototype.dispose = function() {};

Tone.prototype.Signal = function() {};
Tone.Signal.prototype.connect = function() {};
Tone.Signal.prototype.dispose = function() {};
Tone.Signal.prototype.setValueAtTime = function() {};
Tone.Signal.prototype.setRampPoint = function() {};
Tone.Signal.prototype.linearRampToValueAtTime = function() {};
Tone.Signal.prototype.exponentialRampToValueAtTime = function() {};
Tone.Signal.prototype.exponentialRampToValue = function() {};
Tone.Signal.prototype.linearRampToValue = function() {};
Tone.Signal.prototype.setTargetAtTime = function() {};
Tone.Signal.prototype.setValueCurveAtTime = function() {};
Tone.Signal.prototype.cancelScheduledValues = function() {};
Tone.Signal.prototype.rampTo = function() {};

Tone.prototype.SignalBase = function() {};
Tone.SignalBase.prototype.connect = function() {};

Tone.prototype.Subtract = function() {};
Tone.Subtract.prototype.dispose = function() {};
Tone.Subtract.prototype.setValueAtTime = function() {};
Tone.Subtract.prototype.setRampPoint = function() {};
Tone.Subtract.prototype.linearRampToValueAtTime = function() {};
Tone.Subtract.prototype.exponentialRampToValueAtTime = function() {};
Tone.Subtract.prototype.exponentialRampToValue = function() {};
Tone.Subtract.prototype.linearRampToValue = function() {};
Tone.Subtract.prototype.setTargetAtTime = function() {};
Tone.Subtract.prototype.setValueCurveAtTime = function() {};
Tone.Subtract.prototype.cancelScheduledValues = function() {};
Tone.Subtract.prototype.rampTo = function() {};

Tone.prototype.TimelineSignal = function() {};
Tone.TimelineSignal.prototype.dispose = function() {};
Tone.TimelineSignal.prototype.setValueAtTime = function() {};
Tone.TimelineSignal.prototype.setRampPoint = function() {};
Tone.TimelineSignal.prototype.linearRampToValueAtTime = function() {};
Tone.TimelineSignal.prototype.exponentialRampToValueAtTime = function() {};
Tone.TimelineSignal.prototype.exponentialRampToValue = function() {};
Tone.TimelineSignal.prototype.linearRampToValue = function() {};
Tone.TimelineSignal.prototype.setTargetAtTime = function() {};
Tone.TimelineSignal.prototype.setValueCurveAtTime = function() {};
Tone.TimelineSignal.prototype.cancelScheduledValues = function() {};
Tone.TimelineSignal.prototype.rampTo = function() {};

Tone.prototype.WaveShaper = function() {};
Tone.WaveShaper.prototype.setMap = function() {};
Tone.WaveShaper.prototype.dispose = function() {};

Tone.prototype.Zero = function() {};
Tone.Zero.prototype.dispose = function() {};

Tone.prototype.CtrlInterpolate = function() {};
Tone.CtrlInterpolate.prototype.dispose = function() {};

Tone.prototype.CtrlMarkov = function() {};
Tone.CtrlMarkov.prototype.next = function() {};
Tone.CtrlMarkov.prototype.dispose = function() {};

Tone.prototype.CtrlPattern = function() {};
Tone.CtrlPattern.prototype.next = function() {};
Tone.CtrlPattern.prototype.dispose = function() {};

Tone.prototype.CtrlRandom = function() {};
