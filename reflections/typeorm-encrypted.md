
📌 Using typeorm-encrypted for Data Encryption


1. Why Focus Bear double encrypts sensitive data
Focus Bear uses double encryption because database encryption only protects data at rest. If someone gains full database access they can still view plaintext. Encrypting at the application level ensures the database only ever stores ciphertext. Even with a compromised database the attacker still cannot read the sensitive values without also obtaining the application keys. This adds a strong extra layer of protection and follows a defense in depth approach.


2. How typeorm encrypted works with TypeORM entities
typeorm encrypted plugs into TypeORM by using transformers on specific entity columns. Each encrypted column is configured with an encryption key and algorithm. When an entity is saved the transformer encrypts the field before it reaches the database. When the entity is retrieved the transformer automatically decrypts the value so the application receives clean data. The encryption stays transparent to the rest of the codebase.


3. Best practices for secure encryption key management
The safest approach is to store keys in a dedicated key management service or hardware security module. Keys should never be placed in source code or shared environment files. Access to keys should be restricted to only the processes that require them. Key rotation should be scheduled regularly and implemented with care so that older data can still be decrypted during the transition. Keys for different environments and different data types should be separated. Sensitive logs must never include key material. Strong algorithms like AES GCM should be used.


4. Trade offs between database level and application level encryption
Database level encryption is very easy to enable and protects against physical storage attacks but it does not stop someone with full database privileges from viewing plaintext. Application level encryption protects data before it ever hits the database and therefore guards against a broader range of threats. However it adds complexity makes indexing and searching harder and requires careful key management. Combining both approaches provides strong protection while still keeping good performance and flexibility.


