

describe('BambooHR Tests', () => {
    afterEach(async () => {
        jest.clearAllMocks();
    });
    it('backup to S3 handler when bamboo api responds with employee data', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: { employees: [{ id: 1 }] } });
        await backupToS3Handler(event, bambooHRConfig, redshiftConfig);
        expect(moveS3Objects).toHaveBeenCalledTimes(1);
        expect(importJsonFromS3ToRedshift).toHaveBeenCalledTimes(1);
    });

    it('backup to S3 handler when bamboo api responds with no employee data', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: { employees: [] } });
        await expect(backupToS3Handler(event, bambooHRConfig, redshiftConfig)).rejects.toThrow();
        expect(importJsonFromS3ToRedshift).toHaveBeenCalledTimes(0);
    });
});