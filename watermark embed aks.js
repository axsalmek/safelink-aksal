var body = document.body,  html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        var setup = {width: document.body.clientWidth, height};
        
        videojs('topddl_player', setup )
        
        videojs('topddl_player').videoLogo({
          watermark: "AXSVIDEO",
        })
        
        
        videojs('topddl_player').videoJsResolutionSwitcher();
        videojs('topddl_player').hotkeys({
          volumeStep: 0.1,
          seekStep: 5,
          enableModifiersForNumbers: false,
          alwaysCaptureHotkeys: true
        });
        
          videojs('topddl_player').ima({
            id: 'topddl_player',
            adTagUrl: ' '
          });
        
