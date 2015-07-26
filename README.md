# node-sonos-client

A simple NodeJS client for programmatically controlling Sonos wireless speakers within a network.

## Things Are Moving Fast

This package is still in the process of early development. Things may completely change. Things may be totally broken. If they're not already, they probably will at some point.

## Installation

As of yet, this package doesn't appear on NPM. I'd like to get it to a better place before I put it on there. In the meantime, if you really enjoy frustrating yourself, you can pull this package down from GitHub.

## Goals

- [x] Discovery of all Sonos devices on the network.
- [ ] Support for device actions.
    - [x] `GetMute`
    - [x] `SetMute`
    - [ ] `ResetBasicEQ`
    - [x] `GetVolume`
    - [x] `SetVolume`
    - [ ] `SetRelativeVolume`
    - [ ] `GetVolumeDB`
    - [ ] `SetVolumeDB`
    - [ ] `GetVolumeDBRange`
    - [ ] `GetBass`
    - [ ] `SetBass`
    - [ ] `GetTreble`
    - [ ] `SetTreble`
    - [ ] `GetEQ`
    - [ ] `SetEQ`
    - [ ] `GetLoudness`
    - [ ] `SetLoudness`
    - [ ] `GetHeadphoneConnected`
    - [ ] `RampToVolume`
    - [ ] `RestoreVolumePriorToRamp`
    - [x] `GetLEDState`
    - [x] `SetLEDState`
    - [ ] `CreateStereoPair`
    - [ ] `SeparateStereoPair`
    - ...
- [ ] Support for zone and transport actions.
    - [ ] `SetAVTransportURI`
    - [ ] `SetNextAVTransportURI`
    - [x] `GetMediaInfo`
    - [x] `GetTransportInfo`
    - [x] `GetPositionInfo`
    - [x] `GetTransportSettings`
    - [x] `GetCrossfadeMode`
    - [x] `Stop`
    - [x] `Play`
    - [x] `Pause`
    - [ ] `Seek`
    - [x] `Next`
    - [ ] `NextSection`
    - [x] `Previous`
    - [ ] `PreviousSection`
    - [x] `SetPlayMode`
    - [x] `SetCrossfadeMode`
    - [ ] `BecomeCoordinatorOfStandaloneGroup`
    - [ ] `DelegateGroupCoordinationTo`
    - [ ] `BecomeGroupCoordinator`
    - [ ] `BecomeGroupCoordinatorAndSource`
    - [ ] `ChangeCoordinator`
    - [ ] `ChangeTransportSettings`
    - [ ] `StartAutoplay`
    - ...
- [ ] Support for playlist management.
    - [ ] `AddURIToQueue`
    - [ ] `AddMultipleURIsToQueue`
    - [ ] `ReorderTracksInQueue`
    - [ ] `RemoveTrackFromQueue`
    - [ ] `RemoveTrackRangeFromQueue`
    - [ ] `RemoveAllTracksFromQueue`
    - [ ] `SaveQueue`
    - [ ] `BackupQueue`
    - [ ] `CreateSavedQueue`
    - [ ] `AddURIToSavedQueue`
    - [ ] `ReorderTracksInSavedQueue`
- [ ] Support for alarms.
    - ...
- [ ] Support for multiple music services. _Not sure if this is in scope._
    - [ ] Spotify
    - [ ] Tidal
    - ...

## License

The MIT License (MIT)

Copyright (c) 2015 Seth Lopez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
