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
|**denom**|`string`||yes|
|**stage**|`number`|[0: testnet, 1: mainnet]<br/>Enum: `0`, `1`<br/>|yes|
|**validatorAddress**|`string`||yes|
|[**links**](#links)|`object`||yes|
|[**info**](#info)|`object`||yes|
|[**stakingGuides**](#stakingguides)|`object`||yes|
|[**faq**](#faq)|`object`||yes|
|[**logo**](#logo)|`object`||yes|
|[**colors**](#colors)|`object`||yes|

**Additional Properties:** not allowed  
<a name="links"></a>
## links: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**website**|`string`|||
|**telegram**|`string`|||
|**discord**|`string`|||
|**twitter**|`string`|||
|**github**|`string`|||
|**medium**|`string`|||
|**reddit**|`string`|||
|**youtube**|`string`|||
|**email**|`string`|||
|**linkedin**|`string`|||
|**instagram**|`string`|||
|**facebook**|`string`|||

**Additional Properties:** not allowed  
<a name="info"></a>
## info: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**rewards**|`string`||yes|
|**slashing**|`string`||yes|
|**inflation**|`string`||yes|
|**unbonding**|`string`||yes|
|**compounding**|`string`||yes|

**Additional Properties:** not allowed  
<a name="stakingguides"></a>
## stakingGuides: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**medium**|`string`||yes|

**Additional Properties:** not allowed  
<a name="faq"></a>
## faq: object

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|[**en**](#faqen)|`array`||yes|
|[**fr**](#faqfr)|`array`||yes|
|[**es**](#faqes)|`array`||yes|

**Additional Properties:** not allowed  
<a name="faqen"></a>
### faq\.en\[\]: array

**Items**

<a name="faqfr"></a>
### faq\.fr\[\]: array

**Items**

<a name="faqes"></a>
### faq\.es\[\]: array

**Items**

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

