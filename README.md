# EZ Staking ∞ Website Registry 📚

EZ Staking ∞ Website Registry 📚


**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**$schema**|`string`|Enum: `"../protocol.schema.json"`<br/>|yes|
|**name**|`string`||yes|
|**slug**|`string`||yes|
|**appSlug**|`string`||yes|
|**status**|`string`|Enum: `"active"`, `"inactive"`, `"upcoming"`<br/>|yes|
|**symbol**|`string`||yes|
|**stage**|`number`|[0: testnet, 1: mainnet]<br/>Enum: `0`, `1`<br/>|yes|
|**validatorAddress**|`string`||yes|
|**validateSince**|`string`||yes|
|[**links**](#links)|`object`||yes|
|[**info**](#info)|`object`||yes|
|[**logo**](#logo)|`object`||yes|
|[**colors**](#colors)|`object`||yes|

**Additional Properties:** not allowed  
<a name="links"></a>
## links: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**website**|`string`||yes|
|**telegram**|`string`||yes|
|**discord**|`string`||yes|
|**twitter**|`string`||yes|
|**github**|`string`||yes|
|**medium**|`string`||yes|
|**reddit**|`string`||yes|
|**youtube**|`string`||yes|
|**email**|`string`||yes|
|**linkedin**|`string`||yes|
|**instagram**|`string`||yes|
|**facebook**|`string`||yes|
|**docs**|`string`||yes|
|**commonwealth**|`string`||yes|

**Additional Properties:** not allowed  
<a name="info"></a>
## info: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**rewards**|`number`|Distributed automatically every block<br/>Enum: `0`<br/>|yes|
|[**slashing**](#infoslashing)|`number[]`|No slashing penalties \| {d[0]}% Slash Fraction Doublesign - {d[1]} Slash Fraction Downtime<br/>|yes|
|**inflation**|`number`|Deflationary based on staking participation<br/>Enum: `0`<br/>|yes|
|**unbonding**|`number`|no unbonding period \| {d} day unbonding period \| {d} days unbonding period<br/>|yes|
|**compounding**|`number`|New delegation required<br/>Enum: `0`<br/>|yes|

**Additional Properties:** not allowed  
<a name="infoslashing"></a>
### info\.slashing\[\]: array

No slashing penalties | {d[0]}% Slash Fraction Doublesign - {d[1]} Slash Fraction Downtime


**Items**

**Item Type:** `number`  
**Minimum Items:** 0  
**Maximum Items:** 2  
<a name="logo"></a>
## logo: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|[**png**](#logopng)|`object`||yes|
|[**svg**](#logosvg)|`object`||yes|

**Additional Properties:** not allowed  
<a name="logopng"></a>
### logo\.png: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**url**|`string`||yes|
|[**size**](#logopngsize)|`object`||yes|

<a name="logopngsize"></a>
#### logo\.png\.size: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**width**|`string`||yes|
|**height**|`string`||yes|

<a name="logosvg"></a>
### logo\.svg: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**url**|`string`||yes|
|[**size**](#logosvgsize)|`object`||yes|

<a name="logosvgsize"></a>
#### logo\.svg\.size: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**width**|`string`||yes|
|**height**|`string`||yes|

<a name="colors"></a>
## colors: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|[**background**](#colorsbackground)|`string[]`||yes|
|**filter**|`string`||yes|
|**color**|`string`||yes|

<a name="colorsbackground"></a>
### colors\.background\[\]: array

**Items**

**Item Type:** `string`  

