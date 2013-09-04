<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/2000/svg">
<xsl:output method="xml" indent="yes" standalone="no" doctype-public="-//W3C//DTD SVG 1.1//EN" doctype-system="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" media-type="image/svg"/>
  
<xsl:template match="things">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8"></meta>
        <title>XSLT + XML + Javascript Rendering</title>
        <script src="app.js"></script>
        <link rel="stylesheet" type="text/css" href="app.css"></link>
    </head>
    <body>
        <h1>Things</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
            <xsl:apply-templates/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
            <xsl:apply-templates/>
        </svg>
    </body>
    </html>
</xsl:template>

<xsl:template match="thing">
  <rect data-name="{name}" x="{x}" y="{y}" width="{width}" height="{height}" fill="red" stroke="black"/>  
</xsl:template>

<xsl:template match="thing">
  <rect data-name="{name}" x="{x}" y="{y}" width="{width}" height="{height}" fill="red" stroke="black"/>  
</xsl:template>

</xsl:stylesheet>