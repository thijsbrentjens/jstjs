# TJS demo client #

A demo Google Maps API based TJS client, forked from: https://bitbucket.org/ginst/jstjs/

Modified to work as a demonstrator for a TJS implementation at PDOK.

## Use CBS statcode
CBS uses a common data model for the spatial framework data (geospatial data). As of July 1st 2016 that model changed. The id-attribute is not available anymore. This attribute is used by the TJS client for color coding and matching values. The code is changed to use CBS statcode as the id-value. Statcode contains non-numeric values, this has been changed in the code. Please be aware of that when reusing the client.

It also means that the SLD used by the server (for matching the color codes) needs to be changed. For now, the demonstrator uses Geoserver's Filter Functions to create numeric values. Sample SLDs are provided in the directory [sld](sld).

From July 1st, use the file tjs_color_statcode.xml in Geoserver for color coding the identifier.
