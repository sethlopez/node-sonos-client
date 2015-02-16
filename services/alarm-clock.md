## Alarm Clock Service

### State Variables

| Variable Name                      | Type    | Allowed Values                                  | Default Value | Events |
|------------------------------------|---------|-------------------------------------------------|---------------|--------|
| A_ARG_TYPE_ISO8601Time             | string  |                                                 |               | no     |
| A_ARG_TYPE_Recurrence              | string  | [ONCE, WEEKDAYS, WEEKENDS, DAILY]               |               | no     |
| A_ARG_TYPE_AlarmID                 | ui4     |                                                 |               | no     |
| A_ARG_TYPE_AlarmList               | string  |                                                 |               | no     |
| A_ARG_TYPE_AlarmEnabled            | boolean |                                                 |               | no     |
| A_ARG_TYPE_AlarmProgramURI         | string  |                                                 |               | no     |
| A_ARG_TYPE_AlarmProgramMetaData    | string  |                                                 |               | no     |
| A_ARG_TYPE_AlarmPlayMode           | string  | [NORMAL, REPEAT_ALL, SHUFFLE_NOREPEAT, SHUFFLE] | NORMAL        | no     |
| A_ARG_TYPE_AlarmVolume             | ui2     |                                                 |               | no     |
| A_ARG_TYPE_AlarmIncludeLinkedZones | boolean |                                                 |               | no     |
| A_ARG_TYPE_AlarmRoomUUID           | string  |                                                 |               | no     |
| A_ARG_TYPE_TimeZoneIndex           | i4      |                                                 |               | no     |
| A_ARG_TYPE_TimeZoneAutoAdjustDst   | boolean |                                                 |               | no     |
| A_ARG_TYPE_TimeZoneInformation     | string  |                                                 |               | no     |
| A_ARG_TYPE_TimeStamp               | string  |                                                 |               | no     |
| TimeZone                           | string  |                                                 |               | yes    |
| TimeServer                         | string  |                                                 |               | yes    |
| TimeGeneration                     | ui4     |                                                 |               | yes    |
| AlarmListVersion                   | string  |                                                 |               | yes    |
| DailyIndexRefreshTime              | string  |                                                 |               | yes    |
| TimeFormat                         | string  |                                                 |               | yes    |
| DateFormat                         | string  |                                                 |               | yes    |


### Actions

- **SetFormat** (_DesiredTimeFormat, DesiredDateFormat_)
  - {String} DesiredTimeFormat
  - {String} DesiredDateFormat

  ```xml
  <!-- Example Request Body -->
  <u:SetFormat xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <DesiredTimeFormat></DesiredTimeFormat>
    <DesiredDateFormat></DesiredDateFormat>
  </u:SetFormat>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetFormat** () -> (_CurrentTimeFormat, CurrentDateFormat_)

  ```xml
  <!-- Example Request Body -->
  <u:GetFormat xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  </u:GetFormat>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **SetTimeZone** (_Index, AutoAdjustDst_)

  ```xml
  <!-- Example Request Body -->
  <u:SetTimeZone xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <Index></Index>
    <AutoAdjustDst></AutoAdjustDst>
  </u:SetTimeZone>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetTimeZone** () -> (_Index, AutoAdjustDst_)

  ```xml
  <!-- Example Request Body -->
  <u:GetTimeZone xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  </u:GetTimeZone>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetTimeZoneAndRule** () -> (_Index, AutoAdjustDst, CurrentTimeZone_)

  ```xml
  <!-- Example Request Body -->
  <u:GetTimeZoneAndRule xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  </u:GetTimeZoneAndRule>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetTimeZoneRule** (_Index_) -> (_TimeZone_)

  ```xml
  <!-- Example Request Body -->
  <u:GetTimeZoneRule xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <Index></Index>
  </u:GetTimeZoneRule>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **SetTimeServer** (_DesiredTimeServer_)

  ```xml
  <!-- Example Request Body -->
  <u:SetTimeServer xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <DesiredTimeServer></DesiredTimeServer>
  </u:SetTimeServer>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetTimeServer** () -> (_CurrentTimeServer_)

  ```xml
  <!-- Example Request Body -->
  <u:GetTimeServer xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  </u:GetTimeServer>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **SetTimeNow** (_DesiredTime, TimeZoneForDesiredTime_)

  ```xml
  <!-- Example Request Body -->
  <u:SetTimeNow xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <DesiredTime></DesiredTime>
    <TimeZoneForDesiredTime></TimeZoneForDesiredTime>
  </u:SetTimeNow>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetHouseholdTimeAtStamp** (_TimeStamp_) -> (_HouseholdUTCTime_)

  ```xml
  <!-- Example Request Body -->
  <u:GetHouseholdTimeAtStamp xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <TimeStamp></TimeStamp>
  </u:GetHouseholdTimeAtStamp>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetTimeNow** () -> (_CurrentUTCTime, CurrentLocalTime, CurrentTimeZone, CurrentTimeGeneration_)

  ```xml
  <!-- Example Request Body -->
  <u:GetTimeNow xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  </u:GetTimeNow>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **CreateAlarm** (_StartLocalTime, Duration, Recurrence, Enabled, RoomUUID, ProgramURI, ProgramMetaData, PlayMode, Volume, IncludeLinkedZones_) -> (_AssignedID_)

  ```xml
  <!-- Example Request Body -->
  <u:CreateAlarm xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <StartLocalTime></StartLocalTime>
    <Duration></Duration>
    <Recurrence></Recurrence>
    <Enabled></Enabled>
    <RoomUUID></RoomUUID>
    <ProgramURI></ProgramURI>
    <ProgramMetaData></ProgramMetaData>
    <PlayMode></PlayMode>
    <Volume></Volume>
    <IncludeLinkedZones></IncludeLinkedZones>
  </u:CreateAlarm>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **UpdateAlarm** (_ID, StartLocalTime, Duration, Recurrence, Enabled, RoomUUID, ProgramURI, ProgramMetaData, PlayMode, Volume, IncludeLinkedZones_)

  ```xml
  <!-- Example Request Body -->
  <u:UpdateAlarm xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <ID></ID>
    <StartLocalTime></StartLocalTime>
    <Duration></Duration>
    <Recurrence></Recurrence>
    <Enabled></Enabled>
    <RoomUUID></RoomUUID>
    <ProgramURI></ProgramURI>
    <ProgramMetaData></ProgramMetaData>
    <PlayMode></PlayMode>
    <Volume></Volume>
    <IncludeLinkedZones></IncludeLinkedZones>
  </u:UpdateAlarm>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **DestroyAlarm** (_ID_)

  ```xml
  <!-- Example Request Body -->
  <u:DestroyAlarm xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <ID></ID>
  </u:DestroyAlarm>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **ListAlarms** () -> (_CurrentAlarmList, CurrentAlarmListVersion_)

  ```xml
  <!-- Example Request Body -->
  <u:ListAlarms xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  </u:ListAlarms>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **SetDailyIndexRefreshTime** (_DesiredDailyIndexRefreshTime_)

  ```xml
  <!-- Example Request Body -->
  <u:SetDailyIndexRefreshTime xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
    <DesiredDailyIndexRefreshTime></DesiredDailyIndexRefreshTime>
  </u:SetDailyIndexRefreshTime>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
- **GetDailyIndexRefreshTime** () -> (_CurrentDailyIndexRefreshTime_)

  ```xml
  <!-- Example Request Body -->
  <u:GetDailyIndexRefreshTime xmlns:u="urn:schemas-upnp-org:service:AlarmClock:1">
  </u:GetDailyIndexRefreshTime>

  <!-- Example Response Body -->
  <!-- response body coming soon... -->
  ```
